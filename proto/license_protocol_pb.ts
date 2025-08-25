import { Reader, Writer } from '@ohos/protobufjs/minimal';

export enum LicenseRequest_LicenseType {
  STREAMING = 1,
  OFFLINE = 2,
}

export interface LicenseRequest {
  pssh?: Uint8Array;
  clientId?: Uint8Array;
  type?: LicenseRequest_LicenseType;
}

export const LicenseRequest = {
  encode(message: LicenseRequest, writer: Writer = Writer.create()): Writer {
    if (message.pssh !== undefined) {
      writer.uint32(18).bytes(message.pssh);
    }
    if (message.clientId !== undefined) {
      writer.uint32(26).bytes(message.clientId);
    }
    if (message.type !== undefined) {
      writer.uint32(32).int32(message.type);
    }
    return writer;
  },
  create(base?: Partial<LicenseRequest>): LicenseRequest {
    return { ...base } as LicenseRequest;
  }
};

export enum SignedMessage_MessageType {
  LICENSE_REQUEST = 1,
  LICENSE = 2,
}

export interface SignedMessage {
  type?: SignedMessage_MessageType;
  msg?: Uint8Array;
  signature?: Uint8Array;
}

export const SignedMessage = {
  encode(message: SignedMessage, writer: Writer = Writer.create()): Writer {
    if (message.type !== undefined) {
      writer.uint32(8).int32(message.type);
    }
    if (message.msg !== undefined) {
      writer.uint32(18).bytes(message.msg);
    }
    if (message.signature !== undefined) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },
  create(base?: Partial<SignedMessage>): SignedMessage {
    return { ...base } as SignedMessage;
  }
};
