// package: szproduct
// file: szproduct.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetLicenseRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLicenseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLicenseRequest): GetLicenseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLicenseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLicenseRequest;
    static deserializeBinaryFromReader(message: GetLicenseRequest, reader: jspb.BinaryReader): GetLicenseRequest;
}

export namespace GetLicenseRequest {
    export type AsObject = {
    }
}

export class GetLicenseResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetLicenseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLicenseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLicenseResponse): GetLicenseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLicenseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLicenseResponse;
    static deserializeBinaryFromReader(message: GetLicenseResponse, reader: jspb.BinaryReader): GetLicenseResponse;
}

export namespace GetLicenseResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetVersionRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
    static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
    export type AsObject = {
    }
}

export class GetVersionResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
    static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
    export type AsObject = {
        result: string,
    }
}
