// package: szdiagnostic
// file: szdiagnostic.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as szdiagnostic_pb from "./szdiagnostic_pb";

interface ISzDiagnosticService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    checkDatastorePerformance: ISzDiagnosticService_ICheckDatastorePerformance;
    getDatastoreInfo: ISzDiagnosticService_IGetDatastoreInfo;
    getFeature: ISzDiagnosticService_IGetFeature;
    purgeRepository: ISzDiagnosticService_IPurgeRepository;
    reinitialize: ISzDiagnosticService_IReinitialize;
}

interface ISzDiagnosticService_ICheckDatastorePerformance extends grpc.MethodDefinition<szdiagnostic_pb.CheckDatastorePerformanceRequest, szdiagnostic_pb.CheckDatastorePerformanceResponse> {
    path: "/szdiagnostic.SzDiagnostic/CheckDatastorePerformance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szdiagnostic_pb.CheckDatastorePerformanceRequest>;
    requestDeserialize: grpc.deserialize<szdiagnostic_pb.CheckDatastorePerformanceRequest>;
    responseSerialize: grpc.serialize<szdiagnostic_pb.CheckDatastorePerformanceResponse>;
    responseDeserialize: grpc.deserialize<szdiagnostic_pb.CheckDatastorePerformanceResponse>;
}
interface ISzDiagnosticService_IGetDatastoreInfo extends grpc.MethodDefinition<szdiagnostic_pb.GetDatastoreInfoRequest, szdiagnostic_pb.GetDatastoreInfoResponse> {
    path: "/szdiagnostic.SzDiagnostic/GetDatastoreInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szdiagnostic_pb.GetDatastoreInfoRequest>;
    requestDeserialize: grpc.deserialize<szdiagnostic_pb.GetDatastoreInfoRequest>;
    responseSerialize: grpc.serialize<szdiagnostic_pb.GetDatastoreInfoResponse>;
    responseDeserialize: grpc.deserialize<szdiagnostic_pb.GetDatastoreInfoResponse>;
}
interface ISzDiagnosticService_IGetFeature extends grpc.MethodDefinition<szdiagnostic_pb.GetFeatureRequest, szdiagnostic_pb.GetFeatureResponse> {
    path: "/szdiagnostic.SzDiagnostic/GetFeature";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szdiagnostic_pb.GetFeatureRequest>;
    requestDeserialize: grpc.deserialize<szdiagnostic_pb.GetFeatureRequest>;
    responseSerialize: grpc.serialize<szdiagnostic_pb.GetFeatureResponse>;
    responseDeserialize: grpc.deserialize<szdiagnostic_pb.GetFeatureResponse>;
}
interface ISzDiagnosticService_IPurgeRepository extends grpc.MethodDefinition<szdiagnostic_pb.PurgeRepositoryRequest, szdiagnostic_pb.PurgeRepositoryResponse> {
    path: "/szdiagnostic.SzDiagnostic/PurgeRepository";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szdiagnostic_pb.PurgeRepositoryRequest>;
    requestDeserialize: grpc.deserialize<szdiagnostic_pb.PurgeRepositoryRequest>;
    responseSerialize: grpc.serialize<szdiagnostic_pb.PurgeRepositoryResponse>;
    responseDeserialize: grpc.deserialize<szdiagnostic_pb.PurgeRepositoryResponse>;
}
interface ISzDiagnosticService_IReinitialize extends grpc.MethodDefinition<szdiagnostic_pb.ReinitializeRequest, szdiagnostic_pb.ReinitializeResponse> {
    path: "/szdiagnostic.SzDiagnostic/Reinitialize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szdiagnostic_pb.ReinitializeRequest>;
    requestDeserialize: grpc.deserialize<szdiagnostic_pb.ReinitializeRequest>;
    responseSerialize: grpc.serialize<szdiagnostic_pb.ReinitializeResponse>;
    responseDeserialize: grpc.deserialize<szdiagnostic_pb.ReinitializeResponse>;
}

export const SzDiagnosticService: ISzDiagnosticService;

export interface ISzDiagnosticServer {
    checkDatastorePerformance: grpc.handleUnaryCall<szdiagnostic_pb.CheckDatastorePerformanceRequest, szdiagnostic_pb.CheckDatastorePerformanceResponse>;
    getDatastoreInfo: grpc.handleUnaryCall<szdiagnostic_pb.GetDatastoreInfoRequest, szdiagnostic_pb.GetDatastoreInfoResponse>;
    getFeature: grpc.handleUnaryCall<szdiagnostic_pb.GetFeatureRequest, szdiagnostic_pb.GetFeatureResponse>;
    purgeRepository: grpc.handleUnaryCall<szdiagnostic_pb.PurgeRepositoryRequest, szdiagnostic_pb.PurgeRepositoryResponse>;
    reinitialize: grpc.handleUnaryCall<szdiagnostic_pb.ReinitializeRequest, szdiagnostic_pb.ReinitializeResponse>;
}

export interface ISzDiagnosticClient {
    checkDatastorePerformance(request: szdiagnostic_pb.CheckDatastorePerformanceRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.CheckDatastorePerformanceResponse) => void): grpc.ClientUnaryCall;
    checkDatastorePerformance(request: szdiagnostic_pb.CheckDatastorePerformanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.CheckDatastorePerformanceResponse) => void): grpc.ClientUnaryCall;
    checkDatastorePerformance(request: szdiagnostic_pb.CheckDatastorePerformanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.CheckDatastorePerformanceResponse) => void): grpc.ClientUnaryCall;
    getDatastoreInfo(request: szdiagnostic_pb.GetDatastoreInfoRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetDatastoreInfoResponse) => void): grpc.ClientUnaryCall;
    getDatastoreInfo(request: szdiagnostic_pb.GetDatastoreInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetDatastoreInfoResponse) => void): grpc.ClientUnaryCall;
    getDatastoreInfo(request: szdiagnostic_pb.GetDatastoreInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetDatastoreInfoResponse) => void): grpc.ClientUnaryCall;
    getFeature(request: szdiagnostic_pb.GetFeatureRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetFeatureResponse) => void): grpc.ClientUnaryCall;
    getFeature(request: szdiagnostic_pb.GetFeatureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetFeatureResponse) => void): grpc.ClientUnaryCall;
    getFeature(request: szdiagnostic_pb.GetFeatureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetFeatureResponse) => void): grpc.ClientUnaryCall;
    purgeRepository(request: szdiagnostic_pb.PurgeRepositoryRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.PurgeRepositoryResponse) => void): grpc.ClientUnaryCall;
    purgeRepository(request: szdiagnostic_pb.PurgeRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.PurgeRepositoryResponse) => void): grpc.ClientUnaryCall;
    purgeRepository(request: szdiagnostic_pb.PurgeRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.PurgeRepositoryResponse) => void): grpc.ClientUnaryCall;
    reinitialize(request: szdiagnostic_pb.ReinitializeRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    reinitialize(request: szdiagnostic_pb.ReinitializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    reinitialize(request: szdiagnostic_pb.ReinitializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
}

export class SzDiagnosticClient extends grpc.Client implements ISzDiagnosticClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public checkDatastorePerformance(request: szdiagnostic_pb.CheckDatastorePerformanceRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.CheckDatastorePerformanceResponse) => void): grpc.ClientUnaryCall;
    public checkDatastorePerformance(request: szdiagnostic_pb.CheckDatastorePerformanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.CheckDatastorePerformanceResponse) => void): grpc.ClientUnaryCall;
    public checkDatastorePerformance(request: szdiagnostic_pb.CheckDatastorePerformanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.CheckDatastorePerformanceResponse) => void): grpc.ClientUnaryCall;
    public getDatastoreInfo(request: szdiagnostic_pb.GetDatastoreInfoRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetDatastoreInfoResponse) => void): grpc.ClientUnaryCall;
    public getDatastoreInfo(request: szdiagnostic_pb.GetDatastoreInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetDatastoreInfoResponse) => void): grpc.ClientUnaryCall;
    public getDatastoreInfo(request: szdiagnostic_pb.GetDatastoreInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetDatastoreInfoResponse) => void): grpc.ClientUnaryCall;
    public getFeature(request: szdiagnostic_pb.GetFeatureRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetFeatureResponse) => void): grpc.ClientUnaryCall;
    public getFeature(request: szdiagnostic_pb.GetFeatureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetFeatureResponse) => void): grpc.ClientUnaryCall;
    public getFeature(request: szdiagnostic_pb.GetFeatureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.GetFeatureResponse) => void): grpc.ClientUnaryCall;
    public purgeRepository(request: szdiagnostic_pb.PurgeRepositoryRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.PurgeRepositoryResponse) => void): grpc.ClientUnaryCall;
    public purgeRepository(request: szdiagnostic_pb.PurgeRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.PurgeRepositoryResponse) => void): grpc.ClientUnaryCall;
    public purgeRepository(request: szdiagnostic_pb.PurgeRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.PurgeRepositoryResponse) => void): grpc.ClientUnaryCall;
    public reinitialize(request: szdiagnostic_pb.ReinitializeRequest, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    public reinitialize(request: szdiagnostic_pb.ReinitializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    public reinitialize(request: szdiagnostic_pb.ReinitializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szdiagnostic_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
}
