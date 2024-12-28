// package: szengine
// file: szengine.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddRecordRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): AddRecordRequest;
    getRecordid(): string;
    setRecordid(value: string): AddRecordRequest;
    getRecorddefinition(): string;
    setRecorddefinition(value: string): AddRecordRequest;
    getFlags(): number;
    setFlags(value: number): AddRecordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddRecordRequest): AddRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRecordRequest;
    static deserializeBinaryFromReader(message: AddRecordRequest, reader: jspb.BinaryReader): AddRecordRequest;
}

export namespace AddRecordRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        recorddefinition: string,
        flags: number,
    }
}

export class AddRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): AddRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddRecordResponse): AddRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRecordResponse;
    static deserializeBinaryFromReader(message: AddRecordResponse, reader: jspb.BinaryReader): AddRecordResponse;
}

export namespace AddRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class CloseExportRequest extends jspb.Message { 
    getExporthandle(): number;
    setExporthandle(value: number): CloseExportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseExportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CloseExportRequest): CloseExportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseExportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseExportRequest;
    static deserializeBinaryFromReader(message: CloseExportRequest, reader: jspb.BinaryReader): CloseExportRequest;
}

export namespace CloseExportRequest {
    export type AsObject = {
        exporthandle: number,
    }
}

export class CloseExportResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseExportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CloseExportResponse): CloseExportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseExportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseExportResponse;
    static deserializeBinaryFromReader(message: CloseExportResponse, reader: jspb.BinaryReader): CloseExportResponse;
}

export namespace CloseExportResponse {
    export type AsObject = {
    }
}

export class CountRedoRecordsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountRedoRecordsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CountRedoRecordsRequest): CountRedoRecordsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountRedoRecordsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountRedoRecordsRequest;
    static deserializeBinaryFromReader(message: CountRedoRecordsRequest, reader: jspb.BinaryReader): CountRedoRecordsRequest;
}

export namespace CountRedoRecordsRequest {
    export type AsObject = {
    }
}

export class CountRedoRecordsResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): CountRedoRecordsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountRedoRecordsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CountRedoRecordsResponse): CountRedoRecordsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountRedoRecordsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountRedoRecordsResponse;
    static deserializeBinaryFromReader(message: CountRedoRecordsResponse, reader: jspb.BinaryReader): CountRedoRecordsResponse;
}

export namespace CountRedoRecordsResponse {
    export type AsObject = {
        result: number,
    }
}

export class DeleteRecordRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): DeleteRecordRequest;
    getRecordid(): string;
    setRecordid(value: string): DeleteRecordRequest;
    getFlags(): number;
    setFlags(value: number): DeleteRecordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRecordRequest): DeleteRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRecordRequest;
    static deserializeBinaryFromReader(message: DeleteRecordRequest, reader: jspb.BinaryReader): DeleteRecordRequest;
}

export namespace DeleteRecordRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        flags: number,
    }
}

export class DeleteRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): DeleteRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRecordResponse): DeleteRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRecordResponse;
    static deserializeBinaryFromReader(message: DeleteRecordResponse, reader: jspb.BinaryReader): DeleteRecordResponse;
}

export namespace DeleteRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class ExportCsvEntityReportRequest extends jspb.Message { 
    getCsvcolumnlist(): string;
    setCsvcolumnlist(value: string): ExportCsvEntityReportRequest;
    getFlags(): number;
    setFlags(value: number): ExportCsvEntityReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportCsvEntityReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportCsvEntityReportRequest): ExportCsvEntityReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportCsvEntityReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportCsvEntityReportRequest;
    static deserializeBinaryFromReader(message: ExportCsvEntityReportRequest, reader: jspb.BinaryReader): ExportCsvEntityReportRequest;
}

export namespace ExportCsvEntityReportRequest {
    export type AsObject = {
        csvcolumnlist: string,
        flags: number,
    }
}

export class ExportCsvEntityReportResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): ExportCsvEntityReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportCsvEntityReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportCsvEntityReportResponse): ExportCsvEntityReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportCsvEntityReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportCsvEntityReportResponse;
    static deserializeBinaryFromReader(message: ExportCsvEntityReportResponse, reader: jspb.BinaryReader): ExportCsvEntityReportResponse;
}

export namespace ExportCsvEntityReportResponse {
    export type AsObject = {
        result: number,
    }
}

export class ExportJsonEntityReportRequest extends jspb.Message { 
    getFlags(): number;
    setFlags(value: number): ExportJsonEntityReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportJsonEntityReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportJsonEntityReportRequest): ExportJsonEntityReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportJsonEntityReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportJsonEntityReportRequest;
    static deserializeBinaryFromReader(message: ExportJsonEntityReportRequest, reader: jspb.BinaryReader): ExportJsonEntityReportRequest;
}

export namespace ExportJsonEntityReportRequest {
    export type AsObject = {
        flags: number,
    }
}

export class ExportJsonEntityReportResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): ExportJsonEntityReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportJsonEntityReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportJsonEntityReportResponse): ExportJsonEntityReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportJsonEntityReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportJsonEntityReportResponse;
    static deserializeBinaryFromReader(message: ExportJsonEntityReportResponse, reader: jspb.BinaryReader): ExportJsonEntityReportResponse;
}

export namespace ExportJsonEntityReportResponse {
    export type AsObject = {
        result: number,
    }
}

export class FetchNextRequest extends jspb.Message { 
    getExporthandle(): number;
    setExporthandle(value: number): FetchNextRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchNextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FetchNextRequest): FetchNextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchNextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchNextRequest;
    static deserializeBinaryFromReader(message: FetchNextRequest, reader: jspb.BinaryReader): FetchNextRequest;
}

export namespace FetchNextRequest {
    export type AsObject = {
        exporthandle: number,
    }
}

export class FetchNextResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FetchNextResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchNextResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FetchNextResponse): FetchNextResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchNextResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchNextResponse;
    static deserializeBinaryFromReader(message: FetchNextResponse, reader: jspb.BinaryReader): FetchNextResponse;
}

export namespace FetchNextResponse {
    export type AsObject = {
        result: string,
    }
}

export class FindInterestingEntitiesByEntityIdRequest extends jspb.Message { 
    getEntityid(): number;
    setEntityid(value: number): FindInterestingEntitiesByEntityIdRequest;
    getFlags(): number;
    setFlags(value: number): FindInterestingEntitiesByEntityIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindInterestingEntitiesByEntityIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindInterestingEntitiesByEntityIdRequest): FindInterestingEntitiesByEntityIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindInterestingEntitiesByEntityIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindInterestingEntitiesByEntityIdRequest;
    static deserializeBinaryFromReader(message: FindInterestingEntitiesByEntityIdRequest, reader: jspb.BinaryReader): FindInterestingEntitiesByEntityIdRequest;
}

export namespace FindInterestingEntitiesByEntityIdRequest {
    export type AsObject = {
        entityid: number,
        flags: number,
    }
}

export class FindInterestingEntitiesByEntityIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FindInterestingEntitiesByEntityIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindInterestingEntitiesByEntityIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindInterestingEntitiesByEntityIdResponse): FindInterestingEntitiesByEntityIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindInterestingEntitiesByEntityIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindInterestingEntitiesByEntityIdResponse;
    static deserializeBinaryFromReader(message: FindInterestingEntitiesByEntityIdResponse, reader: jspb.BinaryReader): FindInterestingEntitiesByEntityIdResponse;
}

export namespace FindInterestingEntitiesByEntityIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class FindInterestingEntitiesByRecordIdRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): FindInterestingEntitiesByRecordIdRequest;
    getRecordid(): string;
    setRecordid(value: string): FindInterestingEntitiesByRecordIdRequest;
    getFlags(): number;
    setFlags(value: number): FindInterestingEntitiesByRecordIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindInterestingEntitiesByRecordIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindInterestingEntitiesByRecordIdRequest): FindInterestingEntitiesByRecordIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindInterestingEntitiesByRecordIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindInterestingEntitiesByRecordIdRequest;
    static deserializeBinaryFromReader(message: FindInterestingEntitiesByRecordIdRequest, reader: jspb.BinaryReader): FindInterestingEntitiesByRecordIdRequest;
}

export namespace FindInterestingEntitiesByRecordIdRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        flags: number,
    }
}

export class FindInterestingEntitiesByRecordIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FindInterestingEntitiesByRecordIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindInterestingEntitiesByRecordIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindInterestingEntitiesByRecordIdResponse): FindInterestingEntitiesByRecordIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindInterestingEntitiesByRecordIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindInterestingEntitiesByRecordIdResponse;
    static deserializeBinaryFromReader(message: FindInterestingEntitiesByRecordIdResponse, reader: jspb.BinaryReader): FindInterestingEntitiesByRecordIdResponse;
}

export namespace FindInterestingEntitiesByRecordIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class FindNetworkByEntityIdRequest extends jspb.Message { 
    getEntityids(): string;
    setEntityids(value: string): FindNetworkByEntityIdRequest;
    getMaxdegrees(): number;
    setMaxdegrees(value: number): FindNetworkByEntityIdRequest;
    getBuildoutdegrees(): number;
    setBuildoutdegrees(value: number): FindNetworkByEntityIdRequest;
    getBuildoutmaxentities(): number;
    setBuildoutmaxentities(value: number): FindNetworkByEntityIdRequest;
    getFlags(): number;
    setFlags(value: number): FindNetworkByEntityIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindNetworkByEntityIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindNetworkByEntityIdRequest): FindNetworkByEntityIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindNetworkByEntityIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindNetworkByEntityIdRequest;
    static deserializeBinaryFromReader(message: FindNetworkByEntityIdRequest, reader: jspb.BinaryReader): FindNetworkByEntityIdRequest;
}

export namespace FindNetworkByEntityIdRequest {
    export type AsObject = {
        entityids: string,
        maxdegrees: number,
        buildoutdegrees: number,
        buildoutmaxentities: number,
        flags: number,
    }
}

export class FindNetworkByEntityIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FindNetworkByEntityIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindNetworkByEntityIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindNetworkByEntityIdResponse): FindNetworkByEntityIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindNetworkByEntityIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindNetworkByEntityIdResponse;
    static deserializeBinaryFromReader(message: FindNetworkByEntityIdResponse, reader: jspb.BinaryReader): FindNetworkByEntityIdResponse;
}

export namespace FindNetworkByEntityIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class FindNetworkByRecordIdRequest extends jspb.Message { 
    getRecordkeys(): string;
    setRecordkeys(value: string): FindNetworkByRecordIdRequest;
    getMaxdegrees(): number;
    setMaxdegrees(value: number): FindNetworkByRecordIdRequest;
    getBuildoutdegrees(): number;
    setBuildoutdegrees(value: number): FindNetworkByRecordIdRequest;
    getBuildoutmaxentities(): number;
    setBuildoutmaxentities(value: number): FindNetworkByRecordIdRequest;
    getFlags(): number;
    setFlags(value: number): FindNetworkByRecordIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindNetworkByRecordIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindNetworkByRecordIdRequest): FindNetworkByRecordIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindNetworkByRecordIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindNetworkByRecordIdRequest;
    static deserializeBinaryFromReader(message: FindNetworkByRecordIdRequest, reader: jspb.BinaryReader): FindNetworkByRecordIdRequest;
}

export namespace FindNetworkByRecordIdRequest {
    export type AsObject = {
        recordkeys: string,
        maxdegrees: number,
        buildoutdegrees: number,
        buildoutmaxentities: number,
        flags: number,
    }
}

export class FindNetworkByRecordIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FindNetworkByRecordIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindNetworkByRecordIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindNetworkByRecordIdResponse): FindNetworkByRecordIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindNetworkByRecordIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindNetworkByRecordIdResponse;
    static deserializeBinaryFromReader(message: FindNetworkByRecordIdResponse, reader: jspb.BinaryReader): FindNetworkByRecordIdResponse;
}

export namespace FindNetworkByRecordIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class FindPathByEntityIdRequest extends jspb.Message { 
    getStartentityid(): number;
    setStartentityid(value: number): FindPathByEntityIdRequest;
    getEndentityid(): number;
    setEndentityid(value: number): FindPathByEntityIdRequest;
    getMaxdegrees(): number;
    setMaxdegrees(value: number): FindPathByEntityIdRequest;
    getAvoidentityids(): string;
    setAvoidentityids(value: string): FindPathByEntityIdRequest;
    getRequireddatasources(): string;
    setRequireddatasources(value: string): FindPathByEntityIdRequest;
    getFlags(): number;
    setFlags(value: number): FindPathByEntityIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindPathByEntityIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindPathByEntityIdRequest): FindPathByEntityIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindPathByEntityIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindPathByEntityIdRequest;
    static deserializeBinaryFromReader(message: FindPathByEntityIdRequest, reader: jspb.BinaryReader): FindPathByEntityIdRequest;
}

export namespace FindPathByEntityIdRequest {
    export type AsObject = {
        startentityid: number,
        endentityid: number,
        maxdegrees: number,
        avoidentityids: string,
        requireddatasources: string,
        flags: number,
    }
}

export class FindPathByEntityIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FindPathByEntityIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindPathByEntityIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindPathByEntityIdResponse): FindPathByEntityIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindPathByEntityIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindPathByEntityIdResponse;
    static deserializeBinaryFromReader(message: FindPathByEntityIdResponse, reader: jspb.BinaryReader): FindPathByEntityIdResponse;
}

export namespace FindPathByEntityIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class FindPathByRecordIdRequest extends jspb.Message { 
    getStartdatasourcecode(): string;
    setStartdatasourcecode(value: string): FindPathByRecordIdRequest;
    getStartrecordid(): string;
    setStartrecordid(value: string): FindPathByRecordIdRequest;
    getEnddatasourcecode(): string;
    setEnddatasourcecode(value: string): FindPathByRecordIdRequest;
    getEndrecordid(): string;
    setEndrecordid(value: string): FindPathByRecordIdRequest;
    getMaxdegrees(): number;
    setMaxdegrees(value: number): FindPathByRecordIdRequest;
    getAvoidrecordkeys(): string;
    setAvoidrecordkeys(value: string): FindPathByRecordIdRequest;
    getRequireddatasources(): string;
    setRequireddatasources(value: string): FindPathByRecordIdRequest;
    getFlags(): number;
    setFlags(value: number): FindPathByRecordIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindPathByRecordIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindPathByRecordIdRequest): FindPathByRecordIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindPathByRecordIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindPathByRecordIdRequest;
    static deserializeBinaryFromReader(message: FindPathByRecordIdRequest, reader: jspb.BinaryReader): FindPathByRecordIdRequest;
}

export namespace FindPathByRecordIdRequest {
    export type AsObject = {
        startdatasourcecode: string,
        startrecordid: string,
        enddatasourcecode: string,
        endrecordid: string,
        maxdegrees: number,
        avoidrecordkeys: string,
        requireddatasources: string,
        flags: number,
    }
}

export class FindPathByRecordIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): FindPathByRecordIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindPathByRecordIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindPathByRecordIdResponse): FindPathByRecordIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindPathByRecordIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindPathByRecordIdResponse;
    static deserializeBinaryFromReader(message: FindPathByRecordIdResponse, reader: jspb.BinaryReader): FindPathByRecordIdResponse;
}

export namespace FindPathByRecordIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetActiveConfigIdRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetActiveConfigIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetActiveConfigIdRequest): GetActiveConfigIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetActiveConfigIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetActiveConfigIdRequest;
    static deserializeBinaryFromReader(message: GetActiveConfigIdRequest, reader: jspb.BinaryReader): GetActiveConfigIdRequest;
}

export namespace GetActiveConfigIdRequest {
    export type AsObject = {
    }
}

export class GetActiveConfigIdResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): GetActiveConfigIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetActiveConfigIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetActiveConfigIdResponse): GetActiveConfigIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetActiveConfigIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetActiveConfigIdResponse;
    static deserializeBinaryFromReader(message: GetActiveConfigIdResponse, reader: jspb.BinaryReader): GetActiveConfigIdResponse;
}

export namespace GetActiveConfigIdResponse {
    export type AsObject = {
        result: number,
    }
}

export class GetEntityByEntityIdRequest extends jspb.Message { 
    getEntityid(): number;
    setEntityid(value: number): GetEntityByEntityIdRequest;
    getFlags(): number;
    setFlags(value: number): GetEntityByEntityIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntityByEntityIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntityByEntityIdRequest): GetEntityByEntityIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntityByEntityIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntityByEntityIdRequest;
    static deserializeBinaryFromReader(message: GetEntityByEntityIdRequest, reader: jspb.BinaryReader): GetEntityByEntityIdRequest;
}

export namespace GetEntityByEntityIdRequest {
    export type AsObject = {
        entityid: number,
        flags: number,
    }
}

export class GetEntityByEntityIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetEntityByEntityIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntityByEntityIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntityByEntityIdResponse): GetEntityByEntityIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntityByEntityIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntityByEntityIdResponse;
    static deserializeBinaryFromReader(message: GetEntityByEntityIdResponse, reader: jspb.BinaryReader): GetEntityByEntityIdResponse;
}

export namespace GetEntityByEntityIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetEntityByRecordIdRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): GetEntityByRecordIdRequest;
    getRecordid(): string;
    setRecordid(value: string): GetEntityByRecordIdRequest;
    getFlags(): number;
    setFlags(value: number): GetEntityByRecordIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntityByRecordIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntityByRecordIdRequest): GetEntityByRecordIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntityByRecordIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntityByRecordIdRequest;
    static deserializeBinaryFromReader(message: GetEntityByRecordIdRequest, reader: jspb.BinaryReader): GetEntityByRecordIdRequest;
}

export namespace GetEntityByRecordIdRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        flags: number,
    }
}

export class GetEntityByRecordIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetEntityByRecordIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntityByRecordIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntityByRecordIdResponse): GetEntityByRecordIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntityByRecordIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntityByRecordIdResponse;
    static deserializeBinaryFromReader(message: GetEntityByRecordIdResponse, reader: jspb.BinaryReader): GetEntityByRecordIdResponse;
}

export namespace GetEntityByRecordIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetRecordRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): GetRecordRequest;
    getRecordid(): string;
    setRecordid(value: string): GetRecordRequest;
    getFlags(): number;
    setFlags(value: number): GetRecordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecordRequest): GetRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecordRequest;
    static deserializeBinaryFromReader(message: GetRecordRequest, reader: jspb.BinaryReader): GetRecordRequest;
}

export namespace GetRecordRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        flags: number,
    }
}

export class GetRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecordResponse): GetRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecordResponse;
    static deserializeBinaryFromReader(message: GetRecordResponse, reader: jspb.BinaryReader): GetRecordResponse;
}

export namespace GetRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetRedoRecordRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRedoRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRedoRecordRequest): GetRedoRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRedoRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRedoRecordRequest;
    static deserializeBinaryFromReader(message: GetRedoRecordRequest, reader: jspb.BinaryReader): GetRedoRecordRequest;
}

export namespace GetRedoRecordRequest {
    export type AsObject = {
    }
}

export class GetRedoRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetRedoRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRedoRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRedoRecordResponse): GetRedoRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRedoRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRedoRecordResponse;
    static deserializeBinaryFromReader(message: GetRedoRecordResponse, reader: jspb.BinaryReader): GetRedoRecordResponse;
}

export namespace GetRedoRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetStatsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatsRequest): GetStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatsRequest;
    static deserializeBinaryFromReader(message: GetStatsRequest, reader: jspb.BinaryReader): GetStatsRequest;
}

export namespace GetStatsRequest {
    export type AsObject = {
    }
}

export class GetStatsResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetStatsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatsResponse): GetStatsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatsResponse;
    static deserializeBinaryFromReader(message: GetStatsResponse, reader: jspb.BinaryReader): GetStatsResponse;
}

export namespace GetStatsResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetVirtualEntityByRecordIdRequest extends jspb.Message { 
    getRecordkeys(): string;
    setRecordkeys(value: string): GetVirtualEntityByRecordIdRequest;
    getFlags(): number;
    setFlags(value: number): GetVirtualEntityByRecordIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVirtualEntityByRecordIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVirtualEntityByRecordIdRequest): GetVirtualEntityByRecordIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVirtualEntityByRecordIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVirtualEntityByRecordIdRequest;
    static deserializeBinaryFromReader(message: GetVirtualEntityByRecordIdRequest, reader: jspb.BinaryReader): GetVirtualEntityByRecordIdRequest;
}

export namespace GetVirtualEntityByRecordIdRequest {
    export type AsObject = {
        recordkeys: string,
        flags: number,
    }
}

export class GetVirtualEntityByRecordIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GetVirtualEntityByRecordIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVirtualEntityByRecordIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVirtualEntityByRecordIdResponse): GetVirtualEntityByRecordIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVirtualEntityByRecordIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVirtualEntityByRecordIdResponse;
    static deserializeBinaryFromReader(message: GetVirtualEntityByRecordIdResponse, reader: jspb.BinaryReader): GetVirtualEntityByRecordIdResponse;
}

export namespace GetVirtualEntityByRecordIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class HowEntityByEntityIdRequest extends jspb.Message { 
    getEntityid(): number;
    setEntityid(value: number): HowEntityByEntityIdRequest;
    getFlags(): number;
    setFlags(value: number): HowEntityByEntityIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HowEntityByEntityIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HowEntityByEntityIdRequest): HowEntityByEntityIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HowEntityByEntityIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HowEntityByEntityIdRequest;
    static deserializeBinaryFromReader(message: HowEntityByEntityIdRequest, reader: jspb.BinaryReader): HowEntityByEntityIdRequest;
}

export namespace HowEntityByEntityIdRequest {
    export type AsObject = {
        entityid: number,
        flags: number,
    }
}

export class HowEntityByEntityIdResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): HowEntityByEntityIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HowEntityByEntityIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HowEntityByEntityIdResponse): HowEntityByEntityIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HowEntityByEntityIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HowEntityByEntityIdResponse;
    static deserializeBinaryFromReader(message: HowEntityByEntityIdResponse, reader: jspb.BinaryReader): HowEntityByEntityIdResponse;
}

export namespace HowEntityByEntityIdResponse {
    export type AsObject = {
        result: string,
    }
}

export class PreprocessRecordRequest extends jspb.Message { 
    getRecorddefinition(): string;
    setRecorddefinition(value: string): PreprocessRecordRequest;
    getFlags(): number;
    setFlags(value: number): PreprocessRecordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreprocessRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PreprocessRecordRequest): PreprocessRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreprocessRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreprocessRecordRequest;
    static deserializeBinaryFromReader(message: PreprocessRecordRequest, reader: jspb.BinaryReader): PreprocessRecordRequest;
}

export namespace PreprocessRecordRequest {
    export type AsObject = {
        recorddefinition: string,
        flags: number,
    }
}

export class PreprocessRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): PreprocessRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreprocessRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PreprocessRecordResponse): PreprocessRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreprocessRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreprocessRecordResponse;
    static deserializeBinaryFromReader(message: PreprocessRecordResponse, reader: jspb.BinaryReader): PreprocessRecordResponse;
}

export namespace PreprocessRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class PrimeEngineRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimeEngineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrimeEngineRequest): PrimeEngineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimeEngineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimeEngineRequest;
    static deserializeBinaryFromReader(message: PrimeEngineRequest, reader: jspb.BinaryReader): PrimeEngineRequest;
}

export namespace PrimeEngineRequest {
    export type AsObject = {
    }
}

export class PrimeEngineResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimeEngineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PrimeEngineResponse): PrimeEngineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimeEngineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimeEngineResponse;
    static deserializeBinaryFromReader(message: PrimeEngineResponse, reader: jspb.BinaryReader): PrimeEngineResponse;
}

export namespace PrimeEngineResponse {
    export type AsObject = {
    }
}

export class ProcessRedoRecordRequest extends jspb.Message { 
    getRedorecord(): string;
    setRedorecord(value: string): ProcessRedoRecordRequest;
    getFlags(): number;
    setFlags(value: number): ProcessRedoRecordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessRedoRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessRedoRecordRequest): ProcessRedoRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessRedoRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessRedoRecordRequest;
    static deserializeBinaryFromReader(message: ProcessRedoRecordRequest, reader: jspb.BinaryReader): ProcessRedoRecordRequest;
}

export namespace ProcessRedoRecordRequest {
    export type AsObject = {
        redorecord: string,
        flags: number,
    }
}

export class ProcessRedoRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): ProcessRedoRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessRedoRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessRedoRecordResponse): ProcessRedoRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessRedoRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessRedoRecordResponse;
    static deserializeBinaryFromReader(message: ProcessRedoRecordResponse, reader: jspb.BinaryReader): ProcessRedoRecordResponse;
}

export namespace ProcessRedoRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class ReevaluateEntityRequest extends jspb.Message { 
    getEntityid(): number;
    setEntityid(value: number): ReevaluateEntityRequest;
    getFlags(): number;
    setFlags(value: number): ReevaluateEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReevaluateEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReevaluateEntityRequest): ReevaluateEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReevaluateEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReevaluateEntityRequest;
    static deserializeBinaryFromReader(message: ReevaluateEntityRequest, reader: jspb.BinaryReader): ReevaluateEntityRequest;
}

export namespace ReevaluateEntityRequest {
    export type AsObject = {
        entityid: number,
        flags: number,
    }
}

export class ReevaluateEntityResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): ReevaluateEntityResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReevaluateEntityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReevaluateEntityResponse): ReevaluateEntityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReevaluateEntityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReevaluateEntityResponse;
    static deserializeBinaryFromReader(message: ReevaluateEntityResponse, reader: jspb.BinaryReader): ReevaluateEntityResponse;
}

export namespace ReevaluateEntityResponse {
    export type AsObject = {
        result: string,
    }
}

export class ReevaluateRecordRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): ReevaluateRecordRequest;
    getRecordid(): string;
    setRecordid(value: string): ReevaluateRecordRequest;
    getFlags(): number;
    setFlags(value: number): ReevaluateRecordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReevaluateRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReevaluateRecordRequest): ReevaluateRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReevaluateRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReevaluateRecordRequest;
    static deserializeBinaryFromReader(message: ReevaluateRecordRequest, reader: jspb.BinaryReader): ReevaluateRecordRequest;
}

export namespace ReevaluateRecordRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        flags: number,
    }
}

export class ReevaluateRecordResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): ReevaluateRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReevaluateRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReevaluateRecordResponse): ReevaluateRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReevaluateRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReevaluateRecordResponse;
    static deserializeBinaryFromReader(message: ReevaluateRecordResponse, reader: jspb.BinaryReader): ReevaluateRecordResponse;
}

export namespace ReevaluateRecordResponse {
    export type AsObject = {
        result: string,
    }
}

export class ReinitializeRequest extends jspb.Message { 
    getConfigid(): number;
    setConfigid(value: number): ReinitializeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReinitializeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReinitializeRequest): ReinitializeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReinitializeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReinitializeRequest;
    static deserializeBinaryFromReader(message: ReinitializeRequest, reader: jspb.BinaryReader): ReinitializeRequest;
}

export namespace ReinitializeRequest {
    export type AsObject = {
        configid: number,
    }
}

export class ReinitializeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReinitializeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReinitializeResponse): ReinitializeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReinitializeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReinitializeResponse;
    static deserializeBinaryFromReader(message: ReinitializeResponse, reader: jspb.BinaryReader): ReinitializeResponse;
}

export namespace ReinitializeResponse {
    export type AsObject = {
    }
}

export class SearchByAttributesRequest extends jspb.Message { 
    getAttributes(): string;
    setAttributes(value: string): SearchByAttributesRequest;
    getSearchprofile(): string;
    setSearchprofile(value: string): SearchByAttributesRequest;
    getFlags(): number;
    setFlags(value: number): SearchByAttributesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchByAttributesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchByAttributesRequest): SearchByAttributesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchByAttributesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchByAttributesRequest;
    static deserializeBinaryFromReader(message: SearchByAttributesRequest, reader: jspb.BinaryReader): SearchByAttributesRequest;
}

export namespace SearchByAttributesRequest {
    export type AsObject = {
        attributes: string,
        searchprofile: string,
        flags: number,
    }
}

export class SearchByAttributesResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): SearchByAttributesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchByAttributesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchByAttributesResponse): SearchByAttributesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchByAttributesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchByAttributesResponse;
    static deserializeBinaryFromReader(message: SearchByAttributesResponse, reader: jspb.BinaryReader): SearchByAttributesResponse;
}

export namespace SearchByAttributesResponse {
    export type AsObject = {
        result: string,
    }
}

export class StreamExportCsvEntityReportRequest extends jspb.Message { 
    getCsvcolumnlist(): string;
    setCsvcolumnlist(value: string): StreamExportCsvEntityReportRequest;
    getFlags(): number;
    setFlags(value: number): StreamExportCsvEntityReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamExportCsvEntityReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamExportCsvEntityReportRequest): StreamExportCsvEntityReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamExportCsvEntityReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamExportCsvEntityReportRequest;
    static deserializeBinaryFromReader(message: StreamExportCsvEntityReportRequest, reader: jspb.BinaryReader): StreamExportCsvEntityReportRequest;
}

export namespace StreamExportCsvEntityReportRequest {
    export type AsObject = {
        csvcolumnlist: string,
        flags: number,
    }
}

export class StreamExportCsvEntityReportResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): StreamExportCsvEntityReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamExportCsvEntityReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamExportCsvEntityReportResponse): StreamExportCsvEntityReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamExportCsvEntityReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamExportCsvEntityReportResponse;
    static deserializeBinaryFromReader(message: StreamExportCsvEntityReportResponse, reader: jspb.BinaryReader): StreamExportCsvEntityReportResponse;
}

export namespace StreamExportCsvEntityReportResponse {
    export type AsObject = {
        result: string,
    }
}

export class StreamExportJsonEntityReportRequest extends jspb.Message { 
    getFlags(): number;
    setFlags(value: number): StreamExportJsonEntityReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamExportJsonEntityReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamExportJsonEntityReportRequest): StreamExportJsonEntityReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamExportJsonEntityReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamExportJsonEntityReportRequest;
    static deserializeBinaryFromReader(message: StreamExportJsonEntityReportRequest, reader: jspb.BinaryReader): StreamExportJsonEntityReportRequest;
}

export namespace StreamExportJsonEntityReportRequest {
    export type AsObject = {
        flags: number,
    }
}

export class StreamExportJsonEntityReportResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): StreamExportJsonEntityReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamExportJsonEntityReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamExportJsonEntityReportResponse): StreamExportJsonEntityReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamExportJsonEntityReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamExportJsonEntityReportResponse;
    static deserializeBinaryFromReader(message: StreamExportJsonEntityReportResponse, reader: jspb.BinaryReader): StreamExportJsonEntityReportResponse;
}

export namespace StreamExportJsonEntityReportResponse {
    export type AsObject = {
        result: string,
    }
}

export class WhyEntitiesRequest extends jspb.Message { 
    getEntityid1(): number;
    setEntityid1(value: number): WhyEntitiesRequest;
    getEntityid2(): number;
    setEntityid2(value: number): WhyEntitiesRequest;
    getFlags(): number;
    setFlags(value: number): WhyEntitiesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhyEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhyEntitiesRequest): WhyEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhyEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhyEntitiesRequest;
    static deserializeBinaryFromReader(message: WhyEntitiesRequest, reader: jspb.BinaryReader): WhyEntitiesRequest;
}

export namespace WhyEntitiesRequest {
    export type AsObject = {
        entityid1: number,
        entityid2: number,
        flags: number,
    }
}

export class WhyEntitiesResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): WhyEntitiesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhyEntitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WhyEntitiesResponse): WhyEntitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhyEntitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhyEntitiesResponse;
    static deserializeBinaryFromReader(message: WhyEntitiesResponse, reader: jspb.BinaryReader): WhyEntitiesResponse;
}

export namespace WhyEntitiesResponse {
    export type AsObject = {
        result: string,
    }
}

export class WhyRecordInEntityRequest extends jspb.Message { 
    getDatasourcecode(): string;
    setDatasourcecode(value: string): WhyRecordInEntityRequest;
    getRecordid(): string;
    setRecordid(value: string): WhyRecordInEntityRequest;
    getFlags(): number;
    setFlags(value: number): WhyRecordInEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhyRecordInEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhyRecordInEntityRequest): WhyRecordInEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhyRecordInEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhyRecordInEntityRequest;
    static deserializeBinaryFromReader(message: WhyRecordInEntityRequest, reader: jspb.BinaryReader): WhyRecordInEntityRequest;
}

export namespace WhyRecordInEntityRequest {
    export type AsObject = {
        datasourcecode: string,
        recordid: string,
        flags: number,
    }
}

export class WhyRecordInEntityResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): WhyRecordInEntityResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhyRecordInEntityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WhyRecordInEntityResponse): WhyRecordInEntityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhyRecordInEntityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhyRecordInEntityResponse;
    static deserializeBinaryFromReader(message: WhyRecordInEntityResponse, reader: jspb.BinaryReader): WhyRecordInEntityResponse;
}

export namespace WhyRecordInEntityResponse {
    export type AsObject = {
        result: string,
    }
}

export class WhyRecordsRequest extends jspb.Message { 
    getDatasourcecode1(): string;
    setDatasourcecode1(value: string): WhyRecordsRequest;
    getRecordid1(): string;
    setRecordid1(value: string): WhyRecordsRequest;
    getDatasourcecode2(): string;
    setDatasourcecode2(value: string): WhyRecordsRequest;
    getRecordid2(): string;
    setRecordid2(value: string): WhyRecordsRequest;
    getFlags(): number;
    setFlags(value: number): WhyRecordsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhyRecordsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WhyRecordsRequest): WhyRecordsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhyRecordsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhyRecordsRequest;
    static deserializeBinaryFromReader(message: WhyRecordsRequest, reader: jspb.BinaryReader): WhyRecordsRequest;
}

export namespace WhyRecordsRequest {
    export type AsObject = {
        datasourcecode1: string,
        recordid1: string,
        datasourcecode2: string,
        recordid2: string,
        flags: number,
    }
}

export class WhyRecordsResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): WhyRecordsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhyRecordsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WhyRecordsResponse): WhyRecordsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhyRecordsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhyRecordsResponse;
    static deserializeBinaryFromReader(message: WhyRecordsResponse, reader: jspb.BinaryReader): WhyRecordsResponse;
}

export namespace WhyRecordsResponse {
    export type AsObject = {
        result: string,
    }
}
