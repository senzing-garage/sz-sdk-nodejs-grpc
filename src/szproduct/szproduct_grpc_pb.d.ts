// package: szproduct
// file: szproduct.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as szproduct_pb from "./szproduct_pb";

interface ISzProductService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLicense: ISzProductService_IGetLicense;
    getVersion: ISzProductService_IGetVersion;
}

interface ISzProductService_IGetLicense extends grpc.MethodDefinition<szproduct_pb.GetLicenseRequest, szproduct_pb.GetLicenseResponse> {
    path: "/szproduct.SzProduct/GetLicense";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szproduct_pb.GetLicenseRequest>;
    requestDeserialize: grpc.deserialize<szproduct_pb.GetLicenseRequest>;
    responseSerialize: grpc.serialize<szproduct_pb.GetLicenseResponse>;
    responseDeserialize: grpc.deserialize<szproduct_pb.GetLicenseResponse>;
}
interface ISzProductService_IGetVersion extends grpc.MethodDefinition<szproduct_pb.GetVersionRequest, szproduct_pb.GetVersionResponse> {
    path: "/szproduct.SzProduct/GetVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szproduct_pb.GetVersionRequest>;
    requestDeserialize: grpc.deserialize<szproduct_pb.GetVersionRequest>;
    responseSerialize: grpc.serialize<szproduct_pb.GetVersionResponse>;
    responseDeserialize: grpc.deserialize<szproduct_pb.GetVersionResponse>;
}

export const SzProductService: ISzProductService;

export interface ISzProductServer {
    getLicense: grpc.handleUnaryCall<szproduct_pb.GetLicenseRequest, szproduct_pb.GetLicenseResponse>;
    getVersion: grpc.handleUnaryCall<szproduct_pb.GetVersionRequest, szproduct_pb.GetVersionResponse>;
}

export interface ISzProductClient {
    getLicense(request: szproduct_pb.GetLicenseRequest, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetLicenseResponse) => void): grpc.ClientUnaryCall;
    getLicense(request: szproduct_pb.GetLicenseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetLicenseResponse) => void): grpc.ClientUnaryCall;
    getLicense(request: szproduct_pb.GetLicenseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetLicenseResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: szproduct_pb.GetVersionRequest, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: szproduct_pb.GetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: szproduct_pb.GetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
}

export class SzProductClient extends grpc.Client implements ISzProductClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getLicense(request: szproduct_pb.GetLicenseRequest, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetLicenseResponse) => void): grpc.ClientUnaryCall;
    public getLicense(request: szproduct_pb.GetLicenseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetLicenseResponse) => void): grpc.ClientUnaryCall;
    public getLicense(request: szproduct_pb.GetLicenseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetLicenseResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: szproduct_pb.GetVersionRequest, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: szproduct_pb.GetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: szproduct_pb.GetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szproduct_pb.GetVersionResponse) => void): grpc.ClientUnaryCall;
}
