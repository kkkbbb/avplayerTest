import crypto from '@ohos/security.crypto';

/**
 * AES-CMAC helper used by Widevine license flow.
 */
export class AESCMAC {
  private key: Uint8Array;

  constructor(key: Uint8Array) {
    this.key = key;
  }

  /**
   * Calculate CMAC over the provided data using the supplied key.
   */
  async calculate(data: Uint8Array): Promise<Uint8Array> {
    const symKey = await crypto.createSymKey('AES', this.key);
    const mac = await crypto.createMac('AES-CMAC', { key: symKey });
    mac.update(data);
    return mac.doFinal();
  }
}
