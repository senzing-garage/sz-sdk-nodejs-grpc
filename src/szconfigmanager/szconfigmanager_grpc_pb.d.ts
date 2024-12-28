// package: szconfigmanager
// file: szconfigmanager.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as szconfigmanager_pb from "./szconfigmanager_pb";

interface ISzConfigManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addConfig: ISzConfigManagerService_IAddConfig;
    getConfig: ISzConfigManagerService_IGetConfig;
    getConfigs: ISzConfigManagerService_IGetConfigs;
    getDefaultConfigId: ISzConfigManagerService_IGetDefaultConfigId;
    replaceDefaultConfigId: ISzConfigManagerService_IReplaceDefaultConfigId;
    setDefaultConfigId: ISzConfigManagerService_ISetDefaultConfigId;
}

interface ISzConfigManagerService_IAddConfig extends grpc.MethodDefinition<szconfigmanager_pb.AddConfigRequest, szconfigmanager_pb.AddConfigResponse> {
    path: "/szconfigmanager.SzConfigManager/AddConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfigmanager_pb.AddConfigRequest>;
    requestDeserialize: grpc.deserialize<szconfigmanager_pb.AddConfigRequest>;
    responseSerialize: grpc.serialize<szconfigmanager_pb.AddConfigResponse>;
    responseDeserialize: grpc.deserialize<szconfigmanager_pb.AddConfigResponse>;
}
interface ISzConfigManagerService_IGetConfig extends grpc.MethodDefinition<szconfigmanager_pb.GetConfigRequest, szconfigmanager_pb.GetConfigResponse> {
    path: "/szconfigmanager.SzConfigManager/GetConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfigmanager_pb.GetConfigRequest>;
    requestDeserialize: grpc.deserialize<szconfigmanager_pb.GetConfigRequest>;
    responseSerialize: grpc.serialize<szconfigmanager_pb.GetConfigResponse>;
    responseDeserialize: grpc.deserialize<szconfigmanager_pb.GetConfigResponse>;
}
interface ISzConfigManagerService_IGetConfigs extends grpc.MethodDefinition<szconfigmanager_pb.GetConfigsRequest, szconfigmanager_pb.GetConfigsResponse> {
    path: "/szconfigmanager.SzConfigManager/GetConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfigmanager_pb.GetConfigsRequest>;
    requestDeserialize: grpc.deserialize<szconfigmanager_pb.GetConfigsRequest>;
    responseSerialize: grpc.serialize<szconfigmanager_pb.GetConfigsResponse>;
    responseDeserialize: grpc.deserialize<szconfigmanager_pb.GetConfigsResponse>;
}
interface ISzConfigManagerService_IGetDefaultConfigId extends grpc.MethodDefinition<szconfigmanager_pb.GetDefaultConfigIdRequest, szconfigmanager_pb.GetDefaultConfigIdResponse> {
    path: "/szconfigmanager.SzConfigManager/GetDefaultConfigId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfigmanager_pb.GetDefaultConfigIdRequest>;
    requestDeserialize: grpc.deserialize<szconfigmanager_pb.GetDefaultConfigIdRequest>;
    responseSerialize: grpc.serialize<szconfigmanager_pb.GetDefaultConfigIdResponse>;
    responseDeserialize: grpc.deserialize<szconfigmanager_pb.GetDefaultConfigIdResponse>;
}
interface ISzConfigManagerService_IReplaceDefaultConfigId extends grpc.MethodDefinition<szconfigmanager_pb.ReplaceDefaultConfigIdRequest, szconfigmanager_pb.ReplaceDefaultConfigIdResponse> {
    path: "/szconfigmanager.SzConfigManager/ReplaceDefaultConfigId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfigmanager_pb.ReplaceDefaultConfigIdRequest>;
    requestDeserialize: grpc.deserialize<szconfigmanager_pb.ReplaceDefaultConfigIdRequest>;
    responseSerialize: grpc.serialize<szconfigmanager_pb.ReplaceDefaultConfigIdResponse>;
    responseDeserialize: grpc.deserialize<szconfigmanager_pb.ReplaceDefaultConfigIdResponse>;
}
interface ISzConfigManagerService_ISetDefaultConfigId extends grpc.MethodDefinition<szconfigmanager_pb.SetDefaultConfigIdRequest, szconfigmanager_pb.SetDefaultConfigIdResponse> {
    path: "/szconfigmanager.SzConfigManager/SetDefaultConfigId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szconfigmanager_pb.SetDefaultConfigIdRequest>;
    requestDeserialize: grpc.deserialize<szconfigmanager_pb.SetDefaultConfigIdRequest>;
    responseSerialize: grpc.serialize<szconfigmanager_pb.SetDefaultConfigIdResponse>;
    responseDeserialize: grpc.deserialize<szconfigmanager_pb.SetDefaultConfigIdResponse>;
}

export const SzConfigManagerService: ISzConfigManagerService;

export interface ISzConfigManagerServer {
    addConfig: grpc.handleUnaryCall<szconfigmanager_pb.AddConfigRequest, szconfigmanager_pb.AddConfigResponse>;
    getConfig: grpc.handleUnaryCall<szconfigmanager_pb.GetConfigRequest, szconfigmanager_pb.GetConfigResponse>;
    getConfigs: grpc.handleUnaryCall<szconfigmanager_pb.GetConfigsRequest, szconfigmanager_pb.GetConfigsResponse>;
    getDefaultConfigId: grpc.handleUnaryCall<szconfigmanager_pb.GetDefaultConfigIdRequest, szconfigmanager_pb.GetDefaultConfigIdResponse>;
    replaceDefaultConfigId: grpc.handleUnaryCall<szconfigmanager_pb.ReplaceDefaultConfigIdRequest, szconfigmanager_pb.ReplaceDefaultConfigIdResponse>;
    setDefaultConfigId: grpc.handleUnaryCall<szconfigmanager_pb.SetDefaultConfigIdRequest, szconfigmanager_pb.SetDefaultConfigIdResponse>;
}

export interface ISzConfigManagerClient {
    addConfig(request: szconfigmanager_pb.AddConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.AddConfigResponse) => void): grpc.ClientUnaryCall;
    addConfig(request: szconfigmanager_pb.AddConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.AddConfigResponse) => void): grpc.ClientUnaryCall;
    addConfig(request: szconfigmanager_pb.AddConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.AddConfigResponse) => void): grpc.ClientUnaryCall;
    getConfig(request: szconfigmanager_pb.GetConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigResponse) => void): grpc.ClientUnaryCall;
    getConfig(request: szconfigmanager_pb.GetConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigResponse) => void): grpc.ClientUnaryCall;
    getConfig(request: szconfigmanager_pb.GetConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigResponse) => void): grpc.ClientUnaryCall;
    getConfigs(request: szconfigmanager_pb.GetConfigsRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigsResponse) => void): grpc.ClientUnaryCall;
    getConfigs(request: szconfigmanager_pb.GetConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigsResponse) => void): grpc.ClientUnaryCall;
    getConfigs(request: szconfigmanager_pb.GetConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigsResponse) => void): grpc.ClientUnaryCall;
    getDefaultConfigId(request: szconfigmanager_pb.GetDefaultConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    getDefaultConfigId(request: szconfigmanager_pb.GetDefaultConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    getDefaultConfigId(request: szconfigmanager_pb.GetDefaultConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    replaceDefaultConfigId(request: szconfigmanager_pb.ReplaceDefaultConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.ReplaceDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    replaceDefaultConfigId(request: szconfigmanager_pb.ReplaceDefaultConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.ReplaceDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    replaceDefaultConfigId(request: szconfigmanager_pb.ReplaceDefaultConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.ReplaceDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    setDefaultConfigId(request: szconfigmanager_pb.SetDefaultConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.SetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    setDefaultConfigId(request: szconfigmanager_pb.SetDefaultConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.SetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    setDefaultConfigId(request: szconfigmanager_pb.SetDefaultConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.SetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
}

export class SzConfigManagerClient extends grpc.Client implements ISzConfigManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addConfig(request: szconfigmanager_pb.AddConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.AddConfigResponse) => void): grpc.ClientUnaryCall;
    public addConfig(request: szconfigmanager_pb.AddConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.AddConfigResponse) => void): grpc.ClientUnaryCall;
    public addConfig(request: szconfigmanager_pb.AddConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.AddConfigResponse) => void): grpc.ClientUnaryCall;
    public getConfig(request: szconfigmanager_pb.GetConfigRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigResponse) => void): grpc.ClientUnaryCall;
    public getConfig(request: szconfigmanager_pb.GetConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigResponse) => void): grpc.ClientUnaryCall;
    public getConfig(request: szconfigmanager_pb.GetConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigResponse) => void): grpc.ClientUnaryCall;
    public getConfigs(request: szconfigmanager_pb.GetConfigsRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigsResponse) => void): grpc.ClientUnaryCall;
    public getConfigs(request: szconfigmanager_pb.GetConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigsResponse) => void): grpc.ClientUnaryCall;
    public getConfigs(request: szconfigmanager_pb.GetConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetConfigsResponse) => void): grpc.ClientUnaryCall;
    public getDefaultConfigId(request: szconfigmanager_pb.GetDefaultConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public getDefaultConfigId(request: szconfigmanager_pb.GetDefaultConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public getDefaultConfigId(request: szconfigmanager_pb.GetDefaultConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.GetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public replaceDefaultConfigId(request: szconfigmanager_pb.ReplaceDefaultConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.ReplaceDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public replaceDefaultConfigId(request: szconfigmanager_pb.ReplaceDefaultConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.ReplaceDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public replaceDefaultConfigId(request: szconfigmanager_pb.ReplaceDefaultConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.ReplaceDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public setDefaultConfigId(request: szconfigmanager_pb.SetDefaultConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.SetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public setDefaultConfigId(request: szconfigmanager_pb.SetDefaultConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.SetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
    public setDefaultConfigId(request: szconfigmanager_pb.SetDefaultConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szconfigmanager_pb.SetDefaultConfigIdResponse) => void): grpc.ClientUnaryCall;
}
