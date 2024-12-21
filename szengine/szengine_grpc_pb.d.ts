// package: szengine
// file: szengine.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as szengine_pb from "./szengine_pb";

interface ISzEngineService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addRecord: ISzEngineService_IAddRecord;
    closeExport: ISzEngineService_ICloseExport;
    countRedoRecords: ISzEngineService_ICountRedoRecords;
    deleteRecord: ISzEngineService_IDeleteRecord;
    exportCsvEntityReport: ISzEngineService_IExportCsvEntityReport;
    exportJsonEntityReport: ISzEngineService_IExportJsonEntityReport;
    fetchNext: ISzEngineService_IFetchNext;
    findInterestingEntitiesByEntityId: ISzEngineService_IFindInterestingEntitiesByEntityId;
    findInterestingEntitiesByRecordId: ISzEngineService_IFindInterestingEntitiesByRecordId;
    findNetworkByEntityId: ISzEngineService_IFindNetworkByEntityId;
    findNetworkByRecordId: ISzEngineService_IFindNetworkByRecordId;
    findPathByEntityId: ISzEngineService_IFindPathByEntityId;
    findPathByRecordId: ISzEngineService_IFindPathByRecordId;
    getActiveConfigId: ISzEngineService_IGetActiveConfigId;
    getEntityByEntityId: ISzEngineService_IGetEntityByEntityId;
    getEntityByRecordId: ISzEngineService_IGetEntityByRecordId;
    getRecord: ISzEngineService_IGetRecord;
    getRedoRecord: ISzEngineService_IGetRedoRecord;
    getStats: ISzEngineService_IGetStats;
    getVirtualEntityByRecordId: ISzEngineService_IGetVirtualEntityByRecordId;
    howEntityByEntityId: ISzEngineService_IHowEntityByEntityId;
    preprocessRecord: ISzEngineService_IPreprocessRecord;
    primeEngine: ISzEngineService_IPrimeEngine;
    processRedoRecord: ISzEngineService_IProcessRedoRecord;
    reevaluateEntity: ISzEngineService_IReevaluateEntity;
    reevaluateRecord: ISzEngineService_IReevaluateRecord;
    reinitialize: ISzEngineService_IReinitialize;
    searchByAttributes: ISzEngineService_ISearchByAttributes;
    streamExportCsvEntityReport: ISzEngineService_IStreamExportCsvEntityReport;
    streamExportJsonEntityReport: ISzEngineService_IStreamExportJsonEntityReport;
    whyEntities: ISzEngineService_IWhyEntities;
    whyRecordInEntity: ISzEngineService_IWhyRecordInEntity;
    whyRecords: ISzEngineService_IWhyRecords;
}

interface ISzEngineService_IAddRecord extends grpc.MethodDefinition<szengine_pb.AddRecordRequest, szengine_pb.AddRecordResponse> {
    path: "/szengine.SzEngine/AddRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.AddRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.AddRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.AddRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.AddRecordResponse>;
}
interface ISzEngineService_ICloseExport extends grpc.MethodDefinition<szengine_pb.CloseExportRequest, szengine_pb.CloseExportResponse> {
    path: "/szengine.SzEngine/CloseExport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.CloseExportRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.CloseExportRequest>;
    responseSerialize: grpc.serialize<szengine_pb.CloseExportResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.CloseExportResponse>;
}
interface ISzEngineService_ICountRedoRecords extends grpc.MethodDefinition<szengine_pb.CountRedoRecordsRequest, szengine_pb.CountRedoRecordsResponse> {
    path: "/szengine.SzEngine/CountRedoRecords";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.CountRedoRecordsRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.CountRedoRecordsRequest>;
    responseSerialize: grpc.serialize<szengine_pb.CountRedoRecordsResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.CountRedoRecordsResponse>;
}
interface ISzEngineService_IDeleteRecord extends grpc.MethodDefinition<szengine_pb.DeleteRecordRequest, szengine_pb.DeleteRecordResponse> {
    path: "/szengine.SzEngine/DeleteRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.DeleteRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.DeleteRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.DeleteRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.DeleteRecordResponse>;
}
interface ISzEngineService_IExportCsvEntityReport extends grpc.MethodDefinition<szengine_pb.ExportCsvEntityReportRequest, szengine_pb.ExportCsvEntityReportResponse> {
    path: "/szengine.SzEngine/ExportCsvEntityReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.ExportCsvEntityReportRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.ExportCsvEntityReportRequest>;
    responseSerialize: grpc.serialize<szengine_pb.ExportCsvEntityReportResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.ExportCsvEntityReportResponse>;
}
interface ISzEngineService_IExportJsonEntityReport extends grpc.MethodDefinition<szengine_pb.ExportJsonEntityReportRequest, szengine_pb.ExportJsonEntityReportResponse> {
    path: "/szengine.SzEngine/ExportJsonEntityReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.ExportJsonEntityReportRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.ExportJsonEntityReportRequest>;
    responseSerialize: grpc.serialize<szengine_pb.ExportJsonEntityReportResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.ExportJsonEntityReportResponse>;
}
interface ISzEngineService_IFetchNext extends grpc.MethodDefinition<szengine_pb.FetchNextRequest, szengine_pb.FetchNextResponse> {
    path: "/szengine.SzEngine/FetchNext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FetchNextRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FetchNextRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FetchNextResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FetchNextResponse>;
}
interface ISzEngineService_IFindInterestingEntitiesByEntityId extends grpc.MethodDefinition<szengine_pb.FindInterestingEntitiesByEntityIdRequest, szengine_pb.FindInterestingEntitiesByEntityIdResponse> {
    path: "/szengine.SzEngine/FindInterestingEntitiesByEntityId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FindInterestingEntitiesByEntityIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FindInterestingEntitiesByEntityIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FindInterestingEntitiesByEntityIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FindInterestingEntitiesByEntityIdResponse>;
}
interface ISzEngineService_IFindInterestingEntitiesByRecordId extends grpc.MethodDefinition<szengine_pb.FindInterestingEntitiesByRecordIdRequest, szengine_pb.FindInterestingEntitiesByRecordIdResponse> {
    path: "/szengine.SzEngine/FindInterestingEntitiesByRecordId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FindInterestingEntitiesByRecordIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FindInterestingEntitiesByRecordIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FindInterestingEntitiesByRecordIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FindInterestingEntitiesByRecordIdResponse>;
}
interface ISzEngineService_IFindNetworkByEntityId extends grpc.MethodDefinition<szengine_pb.FindNetworkByEntityIdRequest, szengine_pb.FindNetworkByEntityIdResponse> {
    path: "/szengine.SzEngine/FindNetworkByEntityId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FindNetworkByEntityIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FindNetworkByEntityIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FindNetworkByEntityIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FindNetworkByEntityIdResponse>;
}
interface ISzEngineService_IFindNetworkByRecordId extends grpc.MethodDefinition<szengine_pb.FindNetworkByRecordIdRequest, szengine_pb.FindNetworkByRecordIdResponse> {
    path: "/szengine.SzEngine/FindNetworkByRecordId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FindNetworkByRecordIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FindNetworkByRecordIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FindNetworkByRecordIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FindNetworkByRecordIdResponse>;
}
interface ISzEngineService_IFindPathByEntityId extends grpc.MethodDefinition<szengine_pb.FindPathByEntityIdRequest, szengine_pb.FindPathByEntityIdResponse> {
    path: "/szengine.SzEngine/FindPathByEntityId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FindPathByEntityIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FindPathByEntityIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FindPathByEntityIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FindPathByEntityIdResponse>;
}
interface ISzEngineService_IFindPathByRecordId extends grpc.MethodDefinition<szengine_pb.FindPathByRecordIdRequest, szengine_pb.FindPathByRecordIdResponse> {
    path: "/szengine.SzEngine/FindPathByRecordId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.FindPathByRecordIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.FindPathByRecordIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.FindPathByRecordIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.FindPathByRecordIdResponse>;
}
interface ISzEngineService_IGetActiveConfigId extends grpc.MethodDefinition<szengine_pb.GetActiveConfigIdRequest, szengine_pb.GetActiveConfigIdResponse> {
    path: "/szengine.SzEngine/GetActiveConfigId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetActiveConfigIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetActiveConfigIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetActiveConfigIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetActiveConfigIdResponse>;
}
interface ISzEngineService_IGetEntityByEntityId extends grpc.MethodDefinition<szengine_pb.GetEntityByEntityIdRequest, szengine_pb.GetEntityByEntityIdResponse> {
    path: "/szengine.SzEngine/GetEntityByEntityId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetEntityByEntityIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetEntityByEntityIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetEntityByEntityIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetEntityByEntityIdResponse>;
}
interface ISzEngineService_IGetEntityByRecordId extends grpc.MethodDefinition<szengine_pb.GetEntityByRecordIdRequest, szengine_pb.GetEntityByRecordIdResponse> {
    path: "/szengine.SzEngine/GetEntityByRecordId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetEntityByRecordIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetEntityByRecordIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetEntityByRecordIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetEntityByRecordIdResponse>;
}
interface ISzEngineService_IGetRecord extends grpc.MethodDefinition<szengine_pb.GetRecordRequest, szengine_pb.GetRecordResponse> {
    path: "/szengine.SzEngine/GetRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetRecordResponse>;
}
interface ISzEngineService_IGetRedoRecord extends grpc.MethodDefinition<szengine_pb.GetRedoRecordRequest, szengine_pb.GetRedoRecordResponse> {
    path: "/szengine.SzEngine/GetRedoRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetRedoRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetRedoRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetRedoRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetRedoRecordResponse>;
}
interface ISzEngineService_IGetStats extends grpc.MethodDefinition<szengine_pb.GetStatsRequest, szengine_pb.GetStatsResponse> {
    path: "/szengine.SzEngine/GetStats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetStatsRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetStatsRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetStatsResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetStatsResponse>;
}
interface ISzEngineService_IGetVirtualEntityByRecordId extends grpc.MethodDefinition<szengine_pb.GetVirtualEntityByRecordIdRequest, szengine_pb.GetVirtualEntityByRecordIdResponse> {
    path: "/szengine.SzEngine/GetVirtualEntityByRecordId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.GetVirtualEntityByRecordIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.GetVirtualEntityByRecordIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.GetVirtualEntityByRecordIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.GetVirtualEntityByRecordIdResponse>;
}
interface ISzEngineService_IHowEntityByEntityId extends grpc.MethodDefinition<szengine_pb.HowEntityByEntityIdRequest, szengine_pb.HowEntityByEntityIdResponse> {
    path: "/szengine.SzEngine/HowEntityByEntityId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.HowEntityByEntityIdRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.HowEntityByEntityIdRequest>;
    responseSerialize: grpc.serialize<szengine_pb.HowEntityByEntityIdResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.HowEntityByEntityIdResponse>;
}
interface ISzEngineService_IPreprocessRecord extends grpc.MethodDefinition<szengine_pb.PreprocessRecordRequest, szengine_pb.PreprocessRecordResponse> {
    path: "/szengine.SzEngine/PreprocessRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.PreprocessRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.PreprocessRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.PreprocessRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.PreprocessRecordResponse>;
}
interface ISzEngineService_IPrimeEngine extends grpc.MethodDefinition<szengine_pb.PrimeEngineRequest, szengine_pb.PrimeEngineResponse> {
    path: "/szengine.SzEngine/PrimeEngine";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.PrimeEngineRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.PrimeEngineRequest>;
    responseSerialize: grpc.serialize<szengine_pb.PrimeEngineResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.PrimeEngineResponse>;
}
interface ISzEngineService_IProcessRedoRecord extends grpc.MethodDefinition<szengine_pb.ProcessRedoRecordRequest, szengine_pb.ProcessRedoRecordResponse> {
    path: "/szengine.SzEngine/ProcessRedoRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.ProcessRedoRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.ProcessRedoRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.ProcessRedoRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.ProcessRedoRecordResponse>;
}
interface ISzEngineService_IReevaluateEntity extends grpc.MethodDefinition<szengine_pb.ReevaluateEntityRequest, szengine_pb.ReevaluateEntityResponse> {
    path: "/szengine.SzEngine/ReevaluateEntity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.ReevaluateEntityRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.ReevaluateEntityRequest>;
    responseSerialize: grpc.serialize<szengine_pb.ReevaluateEntityResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.ReevaluateEntityResponse>;
}
interface ISzEngineService_IReevaluateRecord extends grpc.MethodDefinition<szengine_pb.ReevaluateRecordRequest, szengine_pb.ReevaluateRecordResponse> {
    path: "/szengine.SzEngine/ReevaluateRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.ReevaluateRecordRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.ReevaluateRecordRequest>;
    responseSerialize: grpc.serialize<szengine_pb.ReevaluateRecordResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.ReevaluateRecordResponse>;
}
interface ISzEngineService_IReinitialize extends grpc.MethodDefinition<szengine_pb.ReinitializeRequest, szengine_pb.ReinitializeResponse> {
    path: "/szengine.SzEngine/Reinitialize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.ReinitializeRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.ReinitializeRequest>;
    responseSerialize: grpc.serialize<szengine_pb.ReinitializeResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.ReinitializeResponse>;
}
interface ISzEngineService_ISearchByAttributes extends grpc.MethodDefinition<szengine_pb.SearchByAttributesRequest, szengine_pb.SearchByAttributesResponse> {
    path: "/szengine.SzEngine/SearchByAttributes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.SearchByAttributesRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.SearchByAttributesRequest>;
    responseSerialize: grpc.serialize<szengine_pb.SearchByAttributesResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.SearchByAttributesResponse>;
}
interface ISzEngineService_IStreamExportCsvEntityReport extends grpc.MethodDefinition<szengine_pb.StreamExportCsvEntityReportRequest, szengine_pb.StreamExportCsvEntityReportResponse> {
    path: "/szengine.SzEngine/StreamExportCsvEntityReport";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<szengine_pb.StreamExportCsvEntityReportRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.StreamExportCsvEntityReportRequest>;
    responseSerialize: grpc.serialize<szengine_pb.StreamExportCsvEntityReportResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.StreamExportCsvEntityReportResponse>;
}
interface ISzEngineService_IStreamExportJsonEntityReport extends grpc.MethodDefinition<szengine_pb.StreamExportJsonEntityReportRequest, szengine_pb.StreamExportJsonEntityReportResponse> {
    path: "/szengine.SzEngine/StreamExportJsonEntityReport";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<szengine_pb.StreamExportJsonEntityReportRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.StreamExportJsonEntityReportRequest>;
    responseSerialize: grpc.serialize<szengine_pb.StreamExportJsonEntityReportResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.StreamExportJsonEntityReportResponse>;
}
interface ISzEngineService_IWhyEntities extends grpc.MethodDefinition<szengine_pb.WhyEntitiesRequest, szengine_pb.WhyEntitiesResponse> {
    path: "/szengine.SzEngine/WhyEntities";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.WhyEntitiesRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.WhyEntitiesRequest>;
    responseSerialize: grpc.serialize<szengine_pb.WhyEntitiesResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.WhyEntitiesResponse>;
}
interface ISzEngineService_IWhyRecordInEntity extends grpc.MethodDefinition<szengine_pb.WhyRecordInEntityRequest, szengine_pb.WhyRecordInEntityResponse> {
    path: "/szengine.SzEngine/WhyRecordInEntity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.WhyRecordInEntityRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.WhyRecordInEntityRequest>;
    responseSerialize: grpc.serialize<szengine_pb.WhyRecordInEntityResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.WhyRecordInEntityResponse>;
}
interface ISzEngineService_IWhyRecords extends grpc.MethodDefinition<szengine_pb.WhyRecordsRequest, szengine_pb.WhyRecordsResponse> {
    path: "/szengine.SzEngine/WhyRecords";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<szengine_pb.WhyRecordsRequest>;
    requestDeserialize: grpc.deserialize<szengine_pb.WhyRecordsRequest>;
    responseSerialize: grpc.serialize<szengine_pb.WhyRecordsResponse>;
    responseDeserialize: grpc.deserialize<szengine_pb.WhyRecordsResponse>;
}

export const SzEngineService: ISzEngineService;

export interface ISzEngineServer extends grpc.UntypedServiceImplementation {
    addRecord: grpc.handleUnaryCall<szengine_pb.AddRecordRequest, szengine_pb.AddRecordResponse>;
    closeExport: grpc.handleUnaryCall<szengine_pb.CloseExportRequest, szengine_pb.CloseExportResponse>;
    countRedoRecords: grpc.handleUnaryCall<szengine_pb.CountRedoRecordsRequest, szengine_pb.CountRedoRecordsResponse>;
    deleteRecord: grpc.handleUnaryCall<szengine_pb.DeleteRecordRequest, szengine_pb.DeleteRecordResponse>;
    exportCsvEntityReport: grpc.handleUnaryCall<szengine_pb.ExportCsvEntityReportRequest, szengine_pb.ExportCsvEntityReportResponse>;
    exportJsonEntityReport: grpc.handleUnaryCall<szengine_pb.ExportJsonEntityReportRequest, szengine_pb.ExportJsonEntityReportResponse>;
    fetchNext: grpc.handleUnaryCall<szengine_pb.FetchNextRequest, szengine_pb.FetchNextResponse>;
    findInterestingEntitiesByEntityId: grpc.handleUnaryCall<szengine_pb.FindInterestingEntitiesByEntityIdRequest, szengine_pb.FindInterestingEntitiesByEntityIdResponse>;
    findInterestingEntitiesByRecordId: grpc.handleUnaryCall<szengine_pb.FindInterestingEntitiesByRecordIdRequest, szengine_pb.FindInterestingEntitiesByRecordIdResponse>;
    findNetworkByEntityId: grpc.handleUnaryCall<szengine_pb.FindNetworkByEntityIdRequest, szengine_pb.FindNetworkByEntityIdResponse>;
    findNetworkByRecordId: grpc.handleUnaryCall<szengine_pb.FindNetworkByRecordIdRequest, szengine_pb.FindNetworkByRecordIdResponse>;
    findPathByEntityId: grpc.handleUnaryCall<szengine_pb.FindPathByEntityIdRequest, szengine_pb.FindPathByEntityIdResponse>;
    findPathByRecordId: grpc.handleUnaryCall<szengine_pb.FindPathByRecordIdRequest, szengine_pb.FindPathByRecordIdResponse>;
    getActiveConfigId: grpc.handleUnaryCall<szengine_pb.GetActiveConfigIdRequest, szengine_pb.GetActiveConfigIdResponse>;
    getEntityByEntityId: grpc.handleUnaryCall<szengine_pb.GetEntityByEntityIdRequest, szengine_pb.GetEntityByEntityIdResponse>;
    getEntityByRecordId: grpc.handleUnaryCall<szengine_pb.GetEntityByRecordIdRequest, szengine_pb.GetEntityByRecordIdResponse>;
    getRecord: grpc.handleUnaryCall<szengine_pb.GetRecordRequest, szengine_pb.GetRecordResponse>;
    getRedoRecord: grpc.handleUnaryCall<szengine_pb.GetRedoRecordRequest, szengine_pb.GetRedoRecordResponse>;
    getStats: grpc.handleUnaryCall<szengine_pb.GetStatsRequest, szengine_pb.GetStatsResponse>;
    getVirtualEntityByRecordId: grpc.handleUnaryCall<szengine_pb.GetVirtualEntityByRecordIdRequest, szengine_pb.GetVirtualEntityByRecordIdResponse>;
    howEntityByEntityId: grpc.handleUnaryCall<szengine_pb.HowEntityByEntityIdRequest, szengine_pb.HowEntityByEntityIdResponse>;
    preprocessRecord: grpc.handleUnaryCall<szengine_pb.PreprocessRecordRequest, szengine_pb.PreprocessRecordResponse>;
    primeEngine: grpc.handleUnaryCall<szengine_pb.PrimeEngineRequest, szengine_pb.PrimeEngineResponse>;
    processRedoRecord: grpc.handleUnaryCall<szengine_pb.ProcessRedoRecordRequest, szengine_pb.ProcessRedoRecordResponse>;
    reevaluateEntity: grpc.handleUnaryCall<szengine_pb.ReevaluateEntityRequest, szengine_pb.ReevaluateEntityResponse>;
    reevaluateRecord: grpc.handleUnaryCall<szengine_pb.ReevaluateRecordRequest, szengine_pb.ReevaluateRecordResponse>;
    reinitialize: grpc.handleUnaryCall<szengine_pb.ReinitializeRequest, szengine_pb.ReinitializeResponse>;
    searchByAttributes: grpc.handleUnaryCall<szengine_pb.SearchByAttributesRequest, szengine_pb.SearchByAttributesResponse>;
    streamExportCsvEntityReport: grpc.handleServerStreamingCall<szengine_pb.StreamExportCsvEntityReportRequest, szengine_pb.StreamExportCsvEntityReportResponse>;
    streamExportJsonEntityReport: grpc.handleServerStreamingCall<szengine_pb.StreamExportJsonEntityReportRequest, szengine_pb.StreamExportJsonEntityReportResponse>;
    whyEntities: grpc.handleUnaryCall<szengine_pb.WhyEntitiesRequest, szengine_pb.WhyEntitiesResponse>;
    whyRecordInEntity: grpc.handleUnaryCall<szengine_pb.WhyRecordInEntityRequest, szengine_pb.WhyRecordInEntityResponse>;
    whyRecords: grpc.handleUnaryCall<szengine_pb.WhyRecordsRequest, szengine_pb.WhyRecordsResponse>;
}

export interface ISzEngineClient {
    addRecord(request: szengine_pb.AddRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.AddRecordResponse) => void): grpc.ClientUnaryCall;
    addRecord(request: szengine_pb.AddRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.AddRecordResponse) => void): grpc.ClientUnaryCall;
    addRecord(request: szengine_pb.AddRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.AddRecordResponse) => void): grpc.ClientUnaryCall;
    closeExport(request: szengine_pb.CloseExportRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.CloseExportResponse) => void): grpc.ClientUnaryCall;
    closeExport(request: szengine_pb.CloseExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.CloseExportResponse) => void): grpc.ClientUnaryCall;
    closeExport(request: szengine_pb.CloseExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.CloseExportResponse) => void): grpc.ClientUnaryCall;
    countRedoRecords(request: szengine_pb.CountRedoRecordsRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.CountRedoRecordsResponse) => void): grpc.ClientUnaryCall;
    countRedoRecords(request: szengine_pb.CountRedoRecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.CountRedoRecordsResponse) => void): grpc.ClientUnaryCall;
    countRedoRecords(request: szengine_pb.CountRedoRecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.CountRedoRecordsResponse) => void): grpc.ClientUnaryCall;
    deleteRecord(request: szengine_pb.DeleteRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.DeleteRecordResponse) => void): grpc.ClientUnaryCall;
    deleteRecord(request: szengine_pb.DeleteRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.DeleteRecordResponse) => void): grpc.ClientUnaryCall;
    deleteRecord(request: szengine_pb.DeleteRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.DeleteRecordResponse) => void): grpc.ClientUnaryCall;
    exportCsvEntityReport(request: szengine_pb.ExportCsvEntityReportRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportCsvEntityReportResponse) => void): grpc.ClientUnaryCall;
    exportCsvEntityReport(request: szengine_pb.ExportCsvEntityReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportCsvEntityReportResponse) => void): grpc.ClientUnaryCall;
    exportCsvEntityReport(request: szengine_pb.ExportCsvEntityReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportCsvEntityReportResponse) => void): grpc.ClientUnaryCall;
    exportJsonEntityReport(request: szengine_pb.ExportJsonEntityReportRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportJsonEntityReportResponse) => void): grpc.ClientUnaryCall;
    exportJsonEntityReport(request: szengine_pb.ExportJsonEntityReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportJsonEntityReportResponse) => void): grpc.ClientUnaryCall;
    exportJsonEntityReport(request: szengine_pb.ExportJsonEntityReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportJsonEntityReportResponse) => void): grpc.ClientUnaryCall;
    fetchNext(request: szengine_pb.FetchNextRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FetchNextResponse) => void): grpc.ClientUnaryCall;
    fetchNext(request: szengine_pb.FetchNextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FetchNextResponse) => void): grpc.ClientUnaryCall;
    fetchNext(request: szengine_pb.FetchNextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FetchNextResponse) => void): grpc.ClientUnaryCall;
    findInterestingEntitiesByEntityId(request: szengine_pb.FindInterestingEntitiesByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findInterestingEntitiesByEntityId(request: szengine_pb.FindInterestingEntitiesByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findInterestingEntitiesByEntityId(request: szengine_pb.FindInterestingEntitiesByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findInterestingEntitiesByRecordId(request: szengine_pb.FindInterestingEntitiesByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findInterestingEntitiesByRecordId(request: szengine_pb.FindInterestingEntitiesByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findInterestingEntitiesByRecordId(request: szengine_pb.FindInterestingEntitiesByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findNetworkByEntityId(request: szengine_pb.FindNetworkByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findNetworkByEntityId(request: szengine_pb.FindNetworkByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findNetworkByEntityId(request: szengine_pb.FindNetworkByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findNetworkByRecordId(request: szengine_pb.FindNetworkByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findNetworkByRecordId(request: szengine_pb.FindNetworkByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findNetworkByRecordId(request: szengine_pb.FindNetworkByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findPathByEntityId(request: szengine_pb.FindPathByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findPathByEntityId(request: szengine_pb.FindPathByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findPathByEntityId(request: szengine_pb.FindPathByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByEntityIdResponse) => void): grpc.ClientUnaryCall;
    findPathByRecordId(request: szengine_pb.FindPathByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findPathByRecordId(request: szengine_pb.FindPathByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByRecordIdResponse) => void): grpc.ClientUnaryCall;
    findPathByRecordId(request: szengine_pb.FindPathByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByRecordIdResponse) => void): grpc.ClientUnaryCall;
    getActiveConfigId(request: szengine_pb.GetActiveConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetActiveConfigIdResponse) => void): grpc.ClientUnaryCall;
    getActiveConfigId(request: szengine_pb.GetActiveConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetActiveConfigIdResponse) => void): grpc.ClientUnaryCall;
    getActiveConfigId(request: szengine_pb.GetActiveConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetActiveConfigIdResponse) => void): grpc.ClientUnaryCall;
    getEntityByEntityId(request: szengine_pb.GetEntityByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    getEntityByEntityId(request: szengine_pb.GetEntityByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    getEntityByEntityId(request: szengine_pb.GetEntityByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    getEntityByRecordId(request: szengine_pb.GetEntityByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    getEntityByRecordId(request: szengine_pb.GetEntityByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    getEntityByRecordId(request: szengine_pb.GetEntityByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    getRecord(request: szengine_pb.GetRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRecordResponse) => void): grpc.ClientUnaryCall;
    getRecord(request: szengine_pb.GetRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRecordResponse) => void): grpc.ClientUnaryCall;
    getRecord(request: szengine_pb.GetRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRecordResponse) => void): grpc.ClientUnaryCall;
    getRedoRecord(request: szengine_pb.GetRedoRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRedoRecordResponse) => void): grpc.ClientUnaryCall;
    getRedoRecord(request: szengine_pb.GetRedoRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRedoRecordResponse) => void): grpc.ClientUnaryCall;
    getRedoRecord(request: szengine_pb.GetRedoRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRedoRecordResponse) => void): grpc.ClientUnaryCall;
    getStats(request: szengine_pb.GetStatsRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStats(request: szengine_pb.GetStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStats(request: szengine_pb.GetStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getVirtualEntityByRecordId(request: szengine_pb.GetVirtualEntityByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetVirtualEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    getVirtualEntityByRecordId(request: szengine_pb.GetVirtualEntityByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetVirtualEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    getVirtualEntityByRecordId(request: szengine_pb.GetVirtualEntityByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetVirtualEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    howEntityByEntityId(request: szengine_pb.HowEntityByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.HowEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    howEntityByEntityId(request: szengine_pb.HowEntityByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.HowEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    howEntityByEntityId(request: szengine_pb.HowEntityByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.HowEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    preprocessRecord(request: szengine_pb.PreprocessRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.PreprocessRecordResponse) => void): grpc.ClientUnaryCall;
    preprocessRecord(request: szengine_pb.PreprocessRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.PreprocessRecordResponse) => void): grpc.ClientUnaryCall;
    preprocessRecord(request: szengine_pb.PreprocessRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.PreprocessRecordResponse) => void): grpc.ClientUnaryCall;
    primeEngine(request: szengine_pb.PrimeEngineRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.PrimeEngineResponse) => void): grpc.ClientUnaryCall;
    primeEngine(request: szengine_pb.PrimeEngineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.PrimeEngineResponse) => void): grpc.ClientUnaryCall;
    primeEngine(request: szengine_pb.PrimeEngineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.PrimeEngineResponse) => void): grpc.ClientUnaryCall;
    processRedoRecord(request: szengine_pb.ProcessRedoRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ProcessRedoRecordResponse) => void): grpc.ClientUnaryCall;
    processRedoRecord(request: szengine_pb.ProcessRedoRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ProcessRedoRecordResponse) => void): grpc.ClientUnaryCall;
    processRedoRecord(request: szengine_pb.ProcessRedoRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ProcessRedoRecordResponse) => void): grpc.ClientUnaryCall;
    reevaluateEntity(request: szengine_pb.ReevaluateEntityRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateEntityResponse) => void): grpc.ClientUnaryCall;
    reevaluateEntity(request: szengine_pb.ReevaluateEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateEntityResponse) => void): grpc.ClientUnaryCall;
    reevaluateEntity(request: szengine_pb.ReevaluateEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateEntityResponse) => void): grpc.ClientUnaryCall;
    reevaluateRecord(request: szengine_pb.ReevaluateRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateRecordResponse) => void): grpc.ClientUnaryCall;
    reevaluateRecord(request: szengine_pb.ReevaluateRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateRecordResponse) => void): grpc.ClientUnaryCall;
    reevaluateRecord(request: szengine_pb.ReevaluateRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateRecordResponse) => void): grpc.ClientUnaryCall;
    reinitialize(request: szengine_pb.ReinitializeRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    reinitialize(request: szengine_pb.ReinitializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    reinitialize(request: szengine_pb.ReinitializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    searchByAttributes(request: szengine_pb.SearchByAttributesRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.SearchByAttributesResponse) => void): grpc.ClientUnaryCall;
    searchByAttributes(request: szengine_pb.SearchByAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.SearchByAttributesResponse) => void): grpc.ClientUnaryCall;
    searchByAttributes(request: szengine_pb.SearchByAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.SearchByAttributesResponse) => void): grpc.ClientUnaryCall;
    streamExportCsvEntityReport(request: szengine_pb.StreamExportCsvEntityReportRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportCsvEntityReportResponse>;
    streamExportCsvEntityReport(request: szengine_pb.StreamExportCsvEntityReportRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportCsvEntityReportResponse>;
    streamExportJsonEntityReport(request: szengine_pb.StreamExportJsonEntityReportRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportJsonEntityReportResponse>;
    streamExportJsonEntityReport(request: szengine_pb.StreamExportJsonEntityReportRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportJsonEntityReportResponse>;
    whyEntities(request: szengine_pb.WhyEntitiesRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyEntitiesResponse) => void): grpc.ClientUnaryCall;
    whyEntities(request: szengine_pb.WhyEntitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyEntitiesResponse) => void): grpc.ClientUnaryCall;
    whyEntities(request: szengine_pb.WhyEntitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyEntitiesResponse) => void): grpc.ClientUnaryCall;
    whyRecordInEntity(request: szengine_pb.WhyRecordInEntityRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordInEntityResponse) => void): grpc.ClientUnaryCall;
    whyRecordInEntity(request: szengine_pb.WhyRecordInEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordInEntityResponse) => void): grpc.ClientUnaryCall;
    whyRecordInEntity(request: szengine_pb.WhyRecordInEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordInEntityResponse) => void): grpc.ClientUnaryCall;
    whyRecords(request: szengine_pb.WhyRecordsRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordsResponse) => void): grpc.ClientUnaryCall;
    whyRecords(request: szengine_pb.WhyRecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordsResponse) => void): grpc.ClientUnaryCall;
    whyRecords(request: szengine_pb.WhyRecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordsResponse) => void): grpc.ClientUnaryCall;
}

export class SzEngineClient extends grpc.Client implements ISzEngineClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addRecord(request: szengine_pb.AddRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.AddRecordResponse) => void): grpc.ClientUnaryCall;
    public addRecord(request: szengine_pb.AddRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.AddRecordResponse) => void): grpc.ClientUnaryCall;
    public addRecord(request: szengine_pb.AddRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.AddRecordResponse) => void): grpc.ClientUnaryCall;
    public closeExport(request: szengine_pb.CloseExportRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.CloseExportResponse) => void): grpc.ClientUnaryCall;
    public closeExport(request: szengine_pb.CloseExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.CloseExportResponse) => void): grpc.ClientUnaryCall;
    public closeExport(request: szengine_pb.CloseExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.CloseExportResponse) => void): grpc.ClientUnaryCall;
    public countRedoRecords(request: szengine_pb.CountRedoRecordsRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.CountRedoRecordsResponse) => void): grpc.ClientUnaryCall;
    public countRedoRecords(request: szengine_pb.CountRedoRecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.CountRedoRecordsResponse) => void): grpc.ClientUnaryCall;
    public countRedoRecords(request: szengine_pb.CountRedoRecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.CountRedoRecordsResponse) => void): grpc.ClientUnaryCall;
    public deleteRecord(request: szengine_pb.DeleteRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.DeleteRecordResponse) => void): grpc.ClientUnaryCall;
    public deleteRecord(request: szengine_pb.DeleteRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.DeleteRecordResponse) => void): grpc.ClientUnaryCall;
    public deleteRecord(request: szengine_pb.DeleteRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.DeleteRecordResponse) => void): grpc.ClientUnaryCall;
    public exportCsvEntityReport(request: szengine_pb.ExportCsvEntityReportRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportCsvEntityReportResponse) => void): grpc.ClientUnaryCall;
    public exportCsvEntityReport(request: szengine_pb.ExportCsvEntityReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportCsvEntityReportResponse) => void): grpc.ClientUnaryCall;
    public exportCsvEntityReport(request: szengine_pb.ExportCsvEntityReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportCsvEntityReportResponse) => void): grpc.ClientUnaryCall;
    public exportJsonEntityReport(request: szengine_pb.ExportJsonEntityReportRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportJsonEntityReportResponse) => void): grpc.ClientUnaryCall;
    public exportJsonEntityReport(request: szengine_pb.ExportJsonEntityReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportJsonEntityReportResponse) => void): grpc.ClientUnaryCall;
    public exportJsonEntityReport(request: szengine_pb.ExportJsonEntityReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ExportJsonEntityReportResponse) => void): grpc.ClientUnaryCall;
    public fetchNext(request: szengine_pb.FetchNextRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FetchNextResponse) => void): grpc.ClientUnaryCall;
    public fetchNext(request: szengine_pb.FetchNextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FetchNextResponse) => void): grpc.ClientUnaryCall;
    public fetchNext(request: szengine_pb.FetchNextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FetchNextResponse) => void): grpc.ClientUnaryCall;
    public findInterestingEntitiesByEntityId(request: szengine_pb.FindInterestingEntitiesByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findInterestingEntitiesByEntityId(request: szengine_pb.FindInterestingEntitiesByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findInterestingEntitiesByEntityId(request: szengine_pb.FindInterestingEntitiesByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findInterestingEntitiesByRecordId(request: szengine_pb.FindInterestingEntitiesByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findInterestingEntitiesByRecordId(request: szengine_pb.FindInterestingEntitiesByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findInterestingEntitiesByRecordId(request: szengine_pb.FindInterestingEntitiesByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindInterestingEntitiesByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findNetworkByEntityId(request: szengine_pb.FindNetworkByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findNetworkByEntityId(request: szengine_pb.FindNetworkByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findNetworkByEntityId(request: szengine_pb.FindNetworkByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findNetworkByRecordId(request: szengine_pb.FindNetworkByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findNetworkByRecordId(request: szengine_pb.FindNetworkByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findNetworkByRecordId(request: szengine_pb.FindNetworkByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindNetworkByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findPathByEntityId(request: szengine_pb.FindPathByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findPathByEntityId(request: szengine_pb.FindPathByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findPathByEntityId(request: szengine_pb.FindPathByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public findPathByRecordId(request: szengine_pb.FindPathByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findPathByRecordId(request: szengine_pb.FindPathByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public findPathByRecordId(request: szengine_pb.FindPathByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.FindPathByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public getActiveConfigId(request: szengine_pb.GetActiveConfigIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetActiveConfigIdResponse) => void): grpc.ClientUnaryCall;
    public getActiveConfigId(request: szengine_pb.GetActiveConfigIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetActiveConfigIdResponse) => void): grpc.ClientUnaryCall;
    public getActiveConfigId(request: szengine_pb.GetActiveConfigIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetActiveConfigIdResponse) => void): grpc.ClientUnaryCall;
    public getEntityByEntityId(request: szengine_pb.GetEntityByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public getEntityByEntityId(request: szengine_pb.GetEntityByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public getEntityByEntityId(request: szengine_pb.GetEntityByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public getEntityByRecordId(request: szengine_pb.GetEntityByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public getEntityByRecordId(request: szengine_pb.GetEntityByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public getEntityByRecordId(request: szengine_pb.GetEntityByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public getRecord(request: szengine_pb.GetRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRecordResponse) => void): grpc.ClientUnaryCall;
    public getRecord(request: szengine_pb.GetRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRecordResponse) => void): grpc.ClientUnaryCall;
    public getRecord(request: szengine_pb.GetRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRecordResponse) => void): grpc.ClientUnaryCall;
    public getRedoRecord(request: szengine_pb.GetRedoRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRedoRecordResponse) => void): grpc.ClientUnaryCall;
    public getRedoRecord(request: szengine_pb.GetRedoRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRedoRecordResponse) => void): grpc.ClientUnaryCall;
    public getRedoRecord(request: szengine_pb.GetRedoRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetRedoRecordResponse) => void): grpc.ClientUnaryCall;
    public getStats(request: szengine_pb.GetStatsRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStats(request: szengine_pb.GetStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStats(request: szengine_pb.GetStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getVirtualEntityByRecordId(request: szengine_pb.GetVirtualEntityByRecordIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetVirtualEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public getVirtualEntityByRecordId(request: szengine_pb.GetVirtualEntityByRecordIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetVirtualEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public getVirtualEntityByRecordId(request: szengine_pb.GetVirtualEntityByRecordIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.GetVirtualEntityByRecordIdResponse) => void): grpc.ClientUnaryCall;
    public howEntityByEntityId(request: szengine_pb.HowEntityByEntityIdRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.HowEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public howEntityByEntityId(request: szengine_pb.HowEntityByEntityIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.HowEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public howEntityByEntityId(request: szengine_pb.HowEntityByEntityIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.HowEntityByEntityIdResponse) => void): grpc.ClientUnaryCall;
    public preprocessRecord(request: szengine_pb.PreprocessRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.PreprocessRecordResponse) => void): grpc.ClientUnaryCall;
    public preprocessRecord(request: szengine_pb.PreprocessRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.PreprocessRecordResponse) => void): grpc.ClientUnaryCall;
    public preprocessRecord(request: szengine_pb.PreprocessRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.PreprocessRecordResponse) => void): grpc.ClientUnaryCall;
    public primeEngine(request: szengine_pb.PrimeEngineRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.PrimeEngineResponse) => void): grpc.ClientUnaryCall;
    public primeEngine(request: szengine_pb.PrimeEngineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.PrimeEngineResponse) => void): grpc.ClientUnaryCall;
    public primeEngine(request: szengine_pb.PrimeEngineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.PrimeEngineResponse) => void): grpc.ClientUnaryCall;
    public processRedoRecord(request: szengine_pb.ProcessRedoRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ProcessRedoRecordResponse) => void): grpc.ClientUnaryCall;
    public processRedoRecord(request: szengine_pb.ProcessRedoRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ProcessRedoRecordResponse) => void): grpc.ClientUnaryCall;
    public processRedoRecord(request: szengine_pb.ProcessRedoRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ProcessRedoRecordResponse) => void): grpc.ClientUnaryCall;
    public reevaluateEntity(request: szengine_pb.ReevaluateEntityRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateEntityResponse) => void): grpc.ClientUnaryCall;
    public reevaluateEntity(request: szengine_pb.ReevaluateEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateEntityResponse) => void): grpc.ClientUnaryCall;
    public reevaluateEntity(request: szengine_pb.ReevaluateEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateEntityResponse) => void): grpc.ClientUnaryCall;
    public reevaluateRecord(request: szengine_pb.ReevaluateRecordRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateRecordResponse) => void): grpc.ClientUnaryCall;
    public reevaluateRecord(request: szengine_pb.ReevaluateRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateRecordResponse) => void): grpc.ClientUnaryCall;
    public reevaluateRecord(request: szengine_pb.ReevaluateRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReevaluateRecordResponse) => void): grpc.ClientUnaryCall;
    public reinitialize(request: szengine_pb.ReinitializeRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    public reinitialize(request: szengine_pb.ReinitializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    public reinitialize(request: szengine_pb.ReinitializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.ReinitializeResponse) => void): grpc.ClientUnaryCall;
    public searchByAttributes(request: szengine_pb.SearchByAttributesRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.SearchByAttributesResponse) => void): grpc.ClientUnaryCall;
    public searchByAttributes(request: szengine_pb.SearchByAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.SearchByAttributesResponse) => void): grpc.ClientUnaryCall;
    public searchByAttributes(request: szengine_pb.SearchByAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.SearchByAttributesResponse) => void): grpc.ClientUnaryCall;
    public streamExportCsvEntityReport(request: szengine_pb.StreamExportCsvEntityReportRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportCsvEntityReportResponse>;
    public streamExportCsvEntityReport(request: szengine_pb.StreamExportCsvEntityReportRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportCsvEntityReportResponse>;
    public streamExportJsonEntityReport(request: szengine_pb.StreamExportJsonEntityReportRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportJsonEntityReportResponse>;
    public streamExportJsonEntityReport(request: szengine_pb.StreamExportJsonEntityReportRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<szengine_pb.StreamExportJsonEntityReportResponse>;
    public whyEntities(request: szengine_pb.WhyEntitiesRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyEntitiesResponse) => void): grpc.ClientUnaryCall;
    public whyEntities(request: szengine_pb.WhyEntitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyEntitiesResponse) => void): grpc.ClientUnaryCall;
    public whyEntities(request: szengine_pb.WhyEntitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyEntitiesResponse) => void): grpc.ClientUnaryCall;
    public whyRecordInEntity(request: szengine_pb.WhyRecordInEntityRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordInEntityResponse) => void): grpc.ClientUnaryCall;
    public whyRecordInEntity(request: szengine_pb.WhyRecordInEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordInEntityResponse) => void): grpc.ClientUnaryCall;
    public whyRecordInEntity(request: szengine_pb.WhyRecordInEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordInEntityResponse) => void): grpc.ClientUnaryCall;
    public whyRecords(request: szengine_pb.WhyRecordsRequest, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordsResponse) => void): grpc.ClientUnaryCall;
    public whyRecords(request: szengine_pb.WhyRecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordsResponse) => void): grpc.ClientUnaryCall;
    public whyRecords(request: szengine_pb.WhyRecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: szengine_pb.WhyRecordsResponse) => void): grpc.ClientUnaryCall;
}
