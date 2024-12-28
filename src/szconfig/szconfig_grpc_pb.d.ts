// package: szconfig
// file: szconfig.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as szconfig_pb from "./szconfig_pb";

interface ISzConfigService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addDataSource: ISzConfigService_IAddDataSource;
    closeConfig: ISzConfigService_ICloseConfig;
    createConfig: ISzConfigService_ICreateConfig;
    deleteDataSource: ISzConfigService_IDeleteDataSource;
    exportConfig: ISzConfigService_IExportConfig;
    getDataSources: ISzConfigService_IGetDataSources;
    importConfig: ISzConfigService_IImportConfig;
}

interface ISzConfigService_IAddDataSource extends grpc.MethodDefinition<szconfig_pb.AddDataSourceRequest, szconfig_pb.AddDataSourceResponse> {
    path: "/szconfig.SzConfig/AddDataSource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.AddDataSourceRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.AddDataSourceRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.AddDataSourceResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.AddDataSourceResponse>;
}
interface ISzConfigService_ICloseConfig extends grpc.MethodDefinition<szconfig_pb.CloseConfigRequest, szconfig_pb.CloseConfigResponse> {
    path: "/szconfig.SzConfig/CloseConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.CloseConfigRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.CloseConfigRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.CloseConfigResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.CloseConfigResponse>;
}
interface ISzConfigService_ICreateConfig extends grpc.MethodDefinition<szconfig_pb.CreateConfigRequest, szconfig_pb.CreateConfigResponse> {
    path: "/szconfig.SzConfig/CreateConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.CreateConfigRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.CreateConfigRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.CreateConfigResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.CreateConfigResponse>;
}
interface ISzConfigService_IDeleteDataSource extends grpc.MethodDefinition<szconfig_pb.DeleteDataSourceRequest, szconfig_pb.DeleteDataSourceResponse> {
    path: "/szconfig.SzConfig/DeleteDataSource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.DeleteDataSourceRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.DeleteDataSourceRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.DeleteDataSourceResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.DeleteDataSourceResponse>;
}
interface ISzConfigService_IExportConfig extends grpc.MethodDefinition<szconfig_pb.ExportConfigRequest, szconfig_pb.ExportConfigResponse> {
    path: "/szconfig.SzConfig/ExportConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.ExportConfigRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.ExportConfigRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.ExportConfigResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.ExportConfigResponse>;
}
interface ISzConfigService_IGetDataSources extends grpc.MethodDefinition<szconfig_pb.GetDataSourcesRequest, szconfig_pb.GetDataSourcesResponse> {
    path: "/szconfig.SzConfig/GetDataSources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.GetDataSourcesRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.GetDataSourcesRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.GetDataSourcesResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.GetDataSourcesResponse>;
}
interface ISzConfigService_IImportConfig extends grpc.MethodDefinition<szconfig_pb.ImportConfigRequest, szconfig_pb.ImportConfigResponse> {
    path: "/szconfig.SzConfig/ImportConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfig_pb.ImportConfigRequest>;
    requestDeserialize: grpc.deserialize<szconfig_pb.ImportConfigRequest>;
    responseSerialize: grpc.serialize<szconfig_pb.ImportConfigResponse>;
    responseDeserialize: grpc.deserialize<szconfig_pb.ImportConfigResponse>;
}

export const SzConfigService: ISzConfigService;

export interface ISzConfigServer {
    addDataSource: grpc.handleUnaryCall<szconfig_pb.AddDataSourceRequest, szconfig_pb.AddDataSourceResponse>;
    closeConfig: grpc.handleUnaryCall<szconfig_pb.CloseConfigRequest, szconfig_pb.CloseConfigResponse>;
    createConfig: grpc.handleUnaryCall<szconfig_pb.CreateConfigRequest, szconfig_pb.CreateConfigResponse>;
    deleteDataSource: grpc.handleUnaryCall<szconfig_pb.DeleteDataSourceRequest, szconfig_pb.DeleteDataSourceResponse>;
    exportConfig: grpc.handleUnaryCall<szconfig_pb.ExportConfigRequest, szconfig_pb.ExportConfigResponse>;
    getDataSources: grpc.handleUnaryCall<szconfig_pb.GetDataSourcesRequest, szconfig_pb.GetDataSourcesResponse>;
    importConfig: grpc.handleUnaryCall<szconfig_pb.ImportConfigRequest, szconfig_pb.ImportConfigResponse>;
}

export interface ISzConfigClient {
    addDataSource(request: szconfig_pb.AddDataSourceRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.AddDataSourceResponse) => void): grpc.ClientUnaryCall;
    addDataSource(request: szconfig_pb.AddDataSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.AddDataSourceResponse) => void): grpc.ClientUnaryCall;
    addDataSource(request: szconfig_pb.AddDataSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.AddDataSourceResponse) => void): grpc.ClientUnaryCall;
    closeConfig(request: szconfig_pb.CloseConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CloseConfigResponse) => void): grpc.ClientUnaryCall;
    closeConfig(request: szconfig_pb.CloseConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CloseConfigResponse) => void): grpc.ClientUnaryCall;
    closeConfig(request: szconfig_pb.CloseConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CloseConfigResponse) => void): grpc.ClientUnaryCall;
    createConfig(request: szconfig_pb.CreateConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CreateConfigResponse) => void): grpc.ClientUnaryCall;
    createConfig(request: szconfig_pb.CreateConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CreateConfigResponse) => void): grpc.ClientUnaryCall;
    createConfig(request: szconfig_pb.CreateConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CreateConfigResponse) => void): grpc.ClientUnaryCall;
    deleteDataSource(request: szconfig_pb.DeleteDataSourceRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.DeleteDataSourceResponse) => void): grpc.ClientUnaryCall;
    deleteDataSource(request: szconfig_pb.DeleteDataSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.DeleteDataSourceResponse) => void): grpc.ClientUnaryCall;
    deleteDataSource(request: szconfig_pb.DeleteDataSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.DeleteDataSourceResponse) => void): grpc.ClientUnaryCall;
    exportConfig(request: szconfig_pb.ExportConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ExportConfigResponse) => void): grpc.ClientUnaryCall;
    exportConfig(request: szconfig_pb.ExportConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ExportConfigResponse) => void): grpc.ClientUnaryCall;
    exportConfig(request: szconfig_pb.ExportConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ExportConfigResponse) => void): grpc.ClientUnaryCall;
    getDataSources(request: szconfig_pb.GetDataSourcesRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.GetDataSourcesResponse) => void): grpc.ClientUnaryCall;
    getDataSources(request: szconfig_pb.GetDataSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.GetDataSourcesResponse) => void): grpc.ClientUnaryCall;
    getDataSources(request: szconfig_pb.GetDataSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.GetDataSourcesResponse) => void): grpc.ClientUnaryCall;
    importConfig(request: szconfig_pb.ImportConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ImportConfigResponse) => void): grpc.ClientUnaryCall;
    importConfig(request: szconfig_pb.ImportConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ImportConfigResponse) => void): grpc.ClientUnaryCall;
    importConfig(request: szconfig_pb.ImportConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ImportConfigResponse) => void): grpc.ClientUnaryCall;
}

export class SzConfigClient extends grpc.Client implements ISzConfigClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addDataSource(request: szconfig_pb.AddDataSourceRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.AddDataSourceResponse) => void): grpc.ClientUnaryCall;
    public addDataSource(request: szconfig_pb.AddDataSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.AddDataSourceResponse) => void): grpc.ClientUnaryCall;
    public addDataSource(request: szconfig_pb.AddDataSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.AddDataSourceResponse) => void): grpc.ClientUnaryCall;
    public closeConfig(request: szconfig_pb.CloseConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CloseConfigResponse) => void): grpc.ClientUnaryCall;
    public closeConfig(request: szconfig_pb.CloseConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CloseConfigResponse) => void): grpc.ClientUnaryCall;
    public closeConfig(request: szconfig_pb.CloseConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CloseConfigResponse) => void): grpc.ClientUnaryCall;
    public createConfig(request: szconfig_pb.CreateConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CreateConfigResponse) => void): grpc.ClientUnaryCall;
    public createConfig(request: szconfig_pb.CreateConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CreateConfigResponse) => void): grpc.ClientUnaryCall;
    public createConfig(request: szconfig_pb.CreateConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.CreateConfigResponse) => void): grpc.ClientUnaryCall;
    public deleteDataSource(request: szconfig_pb.DeleteDataSourceRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.DeleteDataSourceResponse) => void): grpc.ClientUnaryCall;
    public deleteDataSource(request: szconfig_pb.DeleteDataSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.DeleteDataSourceResponse) => void): grpc.ClientUnaryCall;
    public deleteDataSource(request: szconfig_pb.DeleteDataSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.DeleteDataSourceResponse) => void): grpc.ClientUnaryCall;
    public exportConfig(request: szconfig_pb.ExportConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ExportConfigResponse) => void): grpc.ClientUnaryCall;
    public exportConfig(request: szconfig_pb.ExportConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ExportConfigResponse) => void): grpc.ClientUnaryCall;
    public exportConfig(request: szconfig_pb.ExportConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ExportConfigResponse) => void): grpc.ClientUnaryCall;
    public getDataSources(request: szconfig_pb.GetDataSourcesRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.GetDataSourcesResponse) => void): grpc.ClientUnaryCall;
    public getDataSources(request: szconfig_pb.GetDataSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.GetDataSourcesResponse) => void): grpc.ClientUnaryCall;
    public getDataSources(request: szconfig_pb.GetDataSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.GetDataSourcesResponse) => void): grpc.ClientUnaryCall;
    public importConfig(request: szconfig_pb.ImportConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ImportConfigResponse) => void): grpc.ClientUnaryCall;
    public importConfig(request: szconfig_pb.ImportConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ImportConfigResponse) => void): grpc.ClientUnaryCall;
    public importConfig(request: szconfig_pb.ImportConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfig_pb.ImportConfigResponse) => void): grpc.ClientUnaryCall;
}
