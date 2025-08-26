import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { Buffer } from 'buffer';

export class AES_CMAC {
  private readonly BLOCK_SIZE = 16;
  private readonly XOR_RIGHT = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x87]);
  private readonly EMPTY_BLOCK_SIZE_BUFFER = Buffer.alloc(this.BLOCK_SIZE);

  private _key: Buffer;
  private _symKey: cryptoFramework.SymKey;
  private _subkeys: { first: Buffer; second: Buffer };
  private _isInitialized: boolean = false;

  public constructor(key: Buffer) {
    if (![16, 24, 32].includes(key.length)) {
      throw new Error("Key size must be 128, 192, or 256 bits.");
    }
    this._key = key;
    // Async initialization will be done in init method
  }

  private async init(): Promise<void> {
    if (this._isInitialized) {
      return;
    }
    
    // Create symmetric key for AES operations
    const keySize = this._key.length * 8;
    const symKeyGenerator = cryptoFramework.createSymKeyGenerator(`AES${keySize}`);
    this._symKey = await symKeyGenerator.convertKey({ data: new Uint8Array(this._key) });
    
    // Generate subkeys
    this._subkeys = await this._generateSubkeys();
    this._isInitialized = true;
  }

  public async calculate(message: Buffer): Promise<Buffer> {
    await this.init();
    
    const blockCount = this._getBlockCount(message);

    let x: Buffer = this.EMPTY_BLOCK_SIZE_BUFFER;
    let y: Buffer;

    for (let i = 0; i < blockCount - 1; i++) {
      const from = i * this.BLOCK_SIZE;
      const block = message.subarray(from, from + this.BLOCK_SIZE);
      y = this._xor(x, block);
      x = await this._aes(y);
    }

    y = this._xor(x, await this._getLastBlock(message));
    x = await this._aes(y);

    return x;
  }

  private async _generateSubkeys(): Promise<{ first: Buffer; second: Buffer }> {
    const l = await this._aes(this.EMPTY_BLOCK_SIZE_BUFFER);

    let first = this._bitShiftLeft(l);
    if (l[0] & 0x80) {
      first = this._xor(first, this.XOR_RIGHT);
    }

    let second = this._bitShiftLeft(first);
    if (first[0] & 0x80) {
      second = this._xor(second, this.XOR_RIGHT);
    }

    return { first: first, second: second };
  }

  private _getBlockCount(message: Buffer): number {
    const blockCount = Math.ceil(message.length / this.BLOCK_SIZE);
    return blockCount === 0 ? 1 : blockCount;
  }

  private async _aes(message: Buffer): Promise<Buffer> {
    try {
      // Create cipher for AES-CBC mode
      const keySize = this._key.length * 8;
      const cipher = cryptoFramework.createCipher(`AES${keySize}|CBC|NoPadding`);
      
      // Initialize with zero IV for CMAC
      const zeroIv = new Uint8Array(this.BLOCK_SIZE);
      await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, this._symKey, {
        algName: 'IvParamsSpec',
        iv: zeroIv
      });
      
      // Ensure message is exactly BLOCK_SIZE
      let input = message;
      if (message.length !== this.BLOCK_SIZE) {
        input = Buffer.alloc(this.BLOCK_SIZE);
        input.set(message);
      }
      
      // Encrypt the block
      const encrypted = await cipher.doFinal({ data: new Uint8Array(input) });
      
      // Return only the first block (16 bytes) for CMAC
      return Buffer.from(encrypted.data).subarray(0, this.BLOCK_SIZE);
    } catch (error) {
      throw new Error(`AES operation failed: ${error}`);
    }
  }

  private async _getLastBlock(message: Buffer): Promise<Buffer> {
    const blockCount = this._getBlockCount(message);
    const paddedBlock = this._padding(message, blockCount - 1);

    let complete = false;
    if (message.length > 0) {
      complete = message.length % this.BLOCK_SIZE === 0;
    }

    const key = complete ? this._subkeys.first : this._subkeys.second;
    return this._xor(paddedBlock, key);
  }

  private _padding(message: Buffer, blockIndex: number): Buffer {
    const block = Buffer.alloc(this.BLOCK_SIZE);

    const from = blockIndex * this.BLOCK_SIZE;

    const slice = message.subarray(from, from + this.BLOCK_SIZE);
    block.set(slice);

    if (slice.length !== this.BLOCK_SIZE) {
      block[slice.length] = 0x80;
    }

    return block;
  }

  private _bitShiftLeft(input: Buffer): Buffer {
    const output = Buffer.alloc(input.length);
    let overflow = 0;
    for (let i = input.length - 1; i >= 0; i--) {
      output[i] = (input[i] << 1) | overflow;
      overflow = input[i] & 0x80 ? 1 : 0;
    }
    return output;
  }

  private _xor(a: Buffer, b: Buffer): Buffer {
    const length = Math.min(a.length, b.length);
    const output = Buffer.alloc(length);
    for (let i = 0; i < length; i++) {
      output[i] = a[i] ^ b[i];
    }
    return output;
  }
}