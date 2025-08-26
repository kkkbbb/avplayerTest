// Widevine DRM module exports
import { ContentDecryptionModule, KeyContainer, Session, SERVICE_CERTIFICATE_CHALLENGE } from "./license";
import { AES_CMAC } from './cmac';
import { license_protocol } from './license_protocol_harmony';

export const LicenseType = license_protocol.LicenseType;
export { Session, SERVICE_CERTIFICATE_CHALLENGE, AES_CMAC, license_protocol };
export type { ContentDecryptionModule, KeyContainer };

// Re-export commonly used types for convenience
export type LicenseIdentification = license_protocol.LicenseIdentification;
export type License = license_protocol.License;
export type SignedMessage = license_protocol.SignedMessage;
export type ClientIdentification = license_protocol.ClientIdentification;
