// package: szconfigmanager
// file: szconfigmanager.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddConfigRequest extends jspb.Message { 
    getConfigdefinition(): string;
    setConfigdefinition(value: string): AddConfigRequest;
    getConfigcomment(): string;
    setConfigcomment(value: string): AddConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddConfigRequest): AddConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddConfigRequest;
    static deserializeBinaryFromReader(message: AddConfigRequest, reader: jspb.BinaryReader): AddConfigRequest;
}

export namespace AddConfigRequest {
    export type AsObject = {
        configdefinition: string,
        configcomment: string,
    }
}

export class AddConfigResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): AddConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddConfigResponse): AddConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddConfigResponse;
    static deserializeBinaryFromReader(message: AddConfigResponse, reader: jspb.BinaryReader): AddConfigResponse;
}

export namespace AddConfigResponse {
    export type AsObject = {
        result: number,
    }
}

export class GetConfigRequest extends jspb.Message { 
    getConfigid(): number;
    setConfigid(value: number): GetConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigRequest): GetConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigRequest;
    static deserializeBinaryFromReader(message: GetConfigRequest, reader: jspb.BinaryReader): GetConfigRequest;
}

export namespace GetConfigRequest {
    export type AsObject = {
        configid: number,
    }
}

export class GetConfigResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigResponse): GetConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigResponse;
    static deserializeBinaryFromReader(message: GetConfigResponse, reader: jspb.BinaryReader): GetConfigResponse;
}

export namespace GetConfigResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetConfigsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigsRequest): GetConfigsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigsRequest;
    static deserializeBinaryFromReader(message: GetConfigsRequest, reader: jspb.BinaryReader): GetConfigsRequest;
}

export namespace GetConfigsRequest {
    export type AsObject = {
    }
}

export class GetConfigsResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetConfigsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConfigsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConfigsResponse): GetConfigsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConfigsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConfigsResponse;
    static deserializeBinaryFromReader(message: GetConfigsResponse, reader: jspb.BinaryReader): GetConfigsResponse;
}

export namespace GetConfigsResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetDefaultConfigIdRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDefaultConfigIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDefaultConfigIdRequest): GetDefaultConfigIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDefaultConfigIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDefaultConfigIdRequest;
    static deserializeBinaryFromReader(message: GetDefaultConfigIdRequest, reader: jspb.BinaryReader): GetDefaultConfigIdRequest;
}

export namespace GetDefaultConfigIdRequest {
    export type AsObject = {
    }
}

export class GetDefaultConfigIdResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): GetDefaultConfigIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDefaultConfigIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDefaultConfigIdResponse): GetDefaultConfigIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDefaultConfigIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDefaultConfigIdResponse;
    static deserializeBinaryFromReader(message: GetDefaultConfigIdResponse, reader: jspb.BinaryReader): GetDefaultConfigIdResponse;
}

export namespace GetDefaultConfigIdResponse {
    export type AsObject = {
        result: number,
    }
}

export class ReplaceDefaultConfigIdRequest extends jspb.Message { 
    getCurrentdefaultconfigid(): number;
    setCurrentdefaultconfigid(value: number): ReplaceDefaultConfigIdRequest;
    getNewdefaultconfigid(): number;
    setNewdefaultconfigid(value: number): ReplaceDefaultConfigIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplaceDefaultConfigIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReplaceDefaultConfigIdRequest): ReplaceDefaultConfigIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplaceDefaultConfigIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplaceDefaultConfigIdRequest;
    static deserializeBinaryFromReader(message: ReplaceDefaultConfigIdRequest, reader: jspb.BinaryReader): ReplaceDefaultConfigIdRequest;
}

export namespace ReplaceDefaultConfigIdRequest {
    export type AsObject = {
        currentdefaultconfigid: number,
        newdefaultconfigid: number,
    }
}

export class ReplaceDefaultConfigIdResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplaceDefaultConfigIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReplaceDefaultConfigIdResponse): ReplaceDefaultConfigIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplaceDefaultConfigIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplaceDefaultConfigIdResponse;
    static deserializeBinaryFromReader(message: ReplaceDefaultConfigIdResponse, reader: jspb.BinaryReader): ReplaceDefaultConfigIdResponse;
}

export namespace ReplaceDefaultConfigIdResponse {
    export type AsObject = {
    }
}

export class SetDefaultConfigIdRequest extends jspb.Message { 
    getConfigid(): number;
    setConfigid(value: number): SetDefaultConfigIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDefaultConfigIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDefaultConfigIdRequest): SetDefaultConfigIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDefaultConfigIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDefaultConfigIdRequest;
    static deserializeBinaryFromReader(message: SetDefaultConfigIdRequest, reader: jspb.BinaryReader): SetDefaultConfigIdRequest;
}

export namespace SetDefaultConfigIdRequest {
    export type AsObject = {
        configid: number,
    }
}

export class SetDefaultConfigIdResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDefaultConfigIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetDefaultConfigIdResponse): SetDefaultConfigIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDefaultConfigIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDefaultConfigIdResponse;
    static deserializeBinaryFromReader(message: SetDefaultConfigIdResponse, reader: jspb.BinaryReader): SetDefaultConfigIdResponse;
}

export namespace SetDefaultConfigIdResponse {
    export type AsObject = {
    }
}
