import crypto from '@ohos/security.crypto';
import http from '@ohos/net.http';
import { LicenseRequest, LicenseRequest_LicenseType, SignedMessage, SignedMessage_MessageType } from '../../../proto/license_protocol_pb';

export interface ContentDecryptionModule {
  privateKey: Uint8Array;
  identifierBlob: Uint8Array;
}

/**
 * Minimal Widevine license helper implemented with ArkTS APIs.
 */
export class License {
  private devicePrivateKey: crypto.PriKey;
  private identifierBlob: Uint8Array;
  private pssh: Uint8Array;
  private rawLicenseRequest: Uint8Array | null = null;

  constructor(cdm: ContentDecryptionModule, pssh: Uint8Array) {
    this.devicePrivateKey = crypto.importPriKey(cdm.privateKey);
    this.identifierBlob = cdm.identifierBlob;
    this.pssh = pssh;
  }

  /**
   * Build a SignedMessage wrapping a LicenseRequest and sign it with the device
   * private key.
   */
  async createLicenseRequest(
    licenseType: LicenseRequest_LicenseType = LicenseRequest_LicenseType.STREAMING
  ): Promise<Uint8Array> {
    const request = LicenseRequest.create({
      pssh: this.pssh,
      clientId: this.identifierBlob,
      type: licenseType
    });
    const payload = LicenseRequest.encode(request).finish();

    const signer = await crypto.createSign('RSA', { key: this.devicePrivateKey, digest: 'SHA256' });
    signer.update(payload);
    const signature = await signer.sign();

    const message = SignedMessage.create({
      type: SignedMessage_MessageType.LICENSE_REQUEST,
      msg: payload,
      signature
    });

    this.rawLicenseRequest = SignedMessage.encode(message).finish();
    return this.rawLicenseRequest;
  }

  /**
   * Post the prepared license request to the specified server and return the raw
   * license response.
   */
  async post(url: string): Promise<Uint8Array> {
    if (!this.rawLicenseRequest) {
      throw new Error('call createLicenseRequest first');
    }
    const client = http.createHttp();
    const res = await client.request(url, {
      method: http.RequestMethod.POST,
      extraData: this.rawLicenseRequest.buffer,
      header: { 'Content-Type': 'application/octet-stream' }
    });
    client.destroy();
    return new Uint8Array(res.result as ArrayBuffer);
  }
}
