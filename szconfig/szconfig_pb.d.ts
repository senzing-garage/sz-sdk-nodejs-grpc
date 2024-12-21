// package: szconfig
// file: szconfig.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddDataSourceRequest extends jspb.Message { 
    getConfighandle(): number;
    setConfighandle(value: number): AddDataSourceRequest;
    getDatasourcecode(): string;
    setDatasourcecode(value: string): AddDataSourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDataSourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddDataSourceRequest): AddDataSourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDataSourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDataSourceRequest;
    static deserializeBinaryFromReader(message: AddDataSourceRequest, reader: jspb.BinaryReader): AddDataSourceRequest;
}

export namespace AddDataSourceRequest {
    export type AsObject = {
        confighandle: number,
        datasourcecode: string,
    }
}

export class AddDataSourceResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): AddDataSourceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDataSourceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddDataSourceResponse): AddDataSourceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDataSourceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDataSourceResponse;
    static deserializeBinaryFromReader(message: AddDataSourceResponse, reader: jspb.BinaryReader): AddDataSourceResponse;
}

export namespace AddDataSourceResponse {
    export type AsObject = {
        result: string,
    }
}

export class CloseConfigRequest extends jspb.Message { 
    getConfighandle(): number;
    setConfighandle(value: number): CloseConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CloseConfigRequest): CloseConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseConfigRequest;
    static deserializeBinaryFromReader(message: CloseConfigRequest, reader: jspb.BinaryReader): CloseConfigRequest;
}

export namespace CloseConfigRequest {
    export type AsObject = {
        confighandle: number,
    }
}

export class CloseConfigResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CloseConfigResponse): CloseConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseConfigResponse;
    static deserializeBinaryFromReader(message: CloseConfigResponse, reader: jspb.BinaryReader): CloseConfigResponse;
}

export namespace CloseConfigResponse {
    export type AsObject = {
    }
}

export class CreateConfigRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConfigRequest): CreateConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConfigRequest;
    static deserializeBinaryFromReader(message: CreateConfigRequest, reader: jspb.BinaryReader): CreateConfigRequest;
}

export namespace CreateConfigRequest {
    export type AsObject = {
    }
}

export class CreateConfigResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): CreateConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConfigResponse): CreateConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConfigResponse;
    static deserializeBinaryFromReader(message: CreateConfigResponse, reader: jspb.BinaryReader): CreateConfigResponse;
}

export namespace CreateConfigResponse {
    export type AsObject = {
        result: number,
    }
}

export class DeleteDataSourceRequest extends jspb.Message { 
    getConfighandle(): number;
    setConfighandle(value: number): DeleteDataSourceRequest;
    getDatasourcecode(): string;
    setDatasourcecode(value: string): DeleteDataSourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDataSourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDataSourceRequest): DeleteDataSourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDataSourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDataSourceRequest;
    static deserializeBinaryFromReader(message: DeleteDataSourceRequest, reader: jspb.BinaryReader): DeleteDataSourceRequest;
}

export namespace DeleteDataSourceRequest {
    export type AsObject = {
        confighandle: number,
        datasourcecode: string,
    }
}

export class DeleteDataSourceResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDataSourceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDataSourceResponse): DeleteDataSourceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDataSourceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDataSourceResponse;
    static deserializeBinaryFromReader(message: DeleteDataSourceResponse, reader: jspb.BinaryReader): DeleteDataSourceResponse;
}

export namespace DeleteDataSourceResponse {
    export type AsObject = {
    }
}

export class ExportConfigRequest extends jspb.Message { 
    getConfighandle(): number;
    setConfighandle(value: number): ExportConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportConfigRequest): ExportConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportConfigRequest;
    static deserializeBinaryFromReader(message: ExportConfigRequest, reader: jspb.BinaryReader): ExportConfigRequest;
}

export namespace ExportConfigRequest {
    export type AsObject = {
        confighandle: number,
    }
}

export class ExportConfigResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): ExportConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportConfigResponse): ExportConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportConfigResponse;
    static deserializeBinaryFromReader(message: ExportConfigResponse, reader: jspb.BinaryReader): ExportConfigResponse;
}

export namespace ExportConfigResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetDataSourcesRequest extends jspb.Message { 
    getConfighandle(): number;
    setConfighandle(value: number): GetDataSourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataSourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataSourcesRequest): GetDataSourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataSourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataSourcesRequest;
    static deserializeBinaryFromReader(message: GetDataSourcesRequest, reader: jspb.BinaryReader): GetDataSourcesRequest;
}

export namespace GetDataSourcesRequest {
    export type AsObject = {
        confighandle: number,
    }
}

export class GetDataSourcesResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetDataSourcesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDataSourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDataSourcesResponse): GetDataSourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDataSourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDataSourcesResponse;
    static deserializeBinaryFromReader(message: GetDataSourcesResponse, reader: jspb.BinaryReader): GetDataSourcesResponse;
}

export namespace GetDataSourcesResponse {
    export type AsObject = {
        result: string,
    }
}

export class ImportConfigRequest extends jspb.Message { 
    getConfigdefinition(): string;
    setConfigdefinition(value: string): ImportConfigRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportConfigRequest): ImportConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportConfigRequest;
    static deserializeBinaryFromReader(message: ImportConfigRequest, reader: jspb.BinaryReader): ImportConfigRequest;
}

export namespace ImportConfigRequest {
    export type AsObject = {
        configdefinition: string,
    }
}

export class ImportConfigResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): ImportConfigResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImportConfigResponse): ImportConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportConfigResponse;
    static deserializeBinaryFromReader(message: ImportConfigResponse, reader: jspb.BinaryReader): ImportConfigResponse;
}

export namespace ImportConfigResponse {
    export type AsObject = {
        result: number,
    }
}
