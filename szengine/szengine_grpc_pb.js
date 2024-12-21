// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var szengine_pb = require('./szengine_pb.js');

function serialize_szengine_AddRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.AddRecordRequest)) {
    throw new Error('Expected argument of type szengine.AddRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_AddRecordRequest(buffer_arg) {
  return szengine_pb.AddRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_AddRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.AddRecordResponse)) {
    throw new Error('Expected argument of type szengine.AddRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_AddRecordResponse(buffer_arg) {
  return szengine_pb.AddRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_CloseExportRequest(arg) {
  if (!(arg instanceof szengine_pb.CloseExportRequest)) {
    throw new Error('Expected argument of type szengine.CloseExportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_CloseExportRequest(buffer_arg) {
  return szengine_pb.CloseExportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_CloseExportResponse(arg) {
  if (!(arg instanceof szengine_pb.CloseExportResponse)) {
    throw new Error('Expected argument of type szengine.CloseExportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_CloseExportResponse(buffer_arg) {
  return szengine_pb.CloseExportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_CountRedoRecordsRequest(arg) {
  if (!(arg instanceof szengine_pb.CountRedoRecordsRequest)) {
    throw new Error('Expected argument of type szengine.CountRedoRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_CountRedoRecordsRequest(buffer_arg) {
  return szengine_pb.CountRedoRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_CountRedoRecordsResponse(arg) {
  if (!(arg instanceof szengine_pb.CountRedoRecordsResponse)) {
    throw new Error('Expected argument of type szengine.CountRedoRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_CountRedoRecordsResponse(buffer_arg) {
  return szengine_pb.CountRedoRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_DeleteRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.DeleteRecordRequest)) {
    throw new Error('Expected argument of type szengine.DeleteRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_DeleteRecordRequest(buffer_arg) {
  return szengine_pb.DeleteRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_DeleteRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.DeleteRecordResponse)) {
    throw new Error('Expected argument of type szengine.DeleteRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_DeleteRecordResponse(buffer_arg) {
  return szengine_pb.DeleteRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ExportCsvEntityReportRequest(arg) {
  if (!(arg instanceof szengine_pb.ExportCsvEntityReportRequest)) {
    throw new Error('Expected argument of type szengine.ExportCsvEntityReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ExportCsvEntityReportRequest(buffer_arg) {
  return szengine_pb.ExportCsvEntityReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ExportCsvEntityReportResponse(arg) {
  if (!(arg instanceof szengine_pb.ExportCsvEntityReportResponse)) {
    throw new Error('Expected argument of type szengine.ExportCsvEntityReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ExportCsvEntityReportResponse(buffer_arg) {
  return szengine_pb.ExportCsvEntityReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ExportJsonEntityReportRequest(arg) {
  if (!(arg instanceof szengine_pb.ExportJsonEntityReportRequest)) {
    throw new Error('Expected argument of type szengine.ExportJsonEntityReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ExportJsonEntityReportRequest(buffer_arg) {
  return szengine_pb.ExportJsonEntityReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ExportJsonEntityReportResponse(arg) {
  if (!(arg instanceof szengine_pb.ExportJsonEntityReportResponse)) {
    throw new Error('Expected argument of type szengine.ExportJsonEntityReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ExportJsonEntityReportResponse(buffer_arg) {
  return szengine_pb.ExportJsonEntityReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FetchNextRequest(arg) {
  if (!(arg instanceof szengine_pb.FetchNextRequest)) {
    throw new Error('Expected argument of type szengine.FetchNextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FetchNextRequest(buffer_arg) {
  return szengine_pb.FetchNextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FetchNextResponse(arg) {
  if (!(arg instanceof szengine_pb.FetchNextResponse)) {
    throw new Error('Expected argument of type szengine.FetchNextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FetchNextResponse(buffer_arg) {
  return szengine_pb.FetchNextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindInterestingEntitiesByEntityIdRequest(arg) {
  if (!(arg instanceof szengine_pb.FindInterestingEntitiesByEntityIdRequest)) {
    throw new Error('Expected argument of type szengine.FindInterestingEntitiesByEntityIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindInterestingEntitiesByEntityIdRequest(buffer_arg) {
  return szengine_pb.FindInterestingEntitiesByEntityIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindInterestingEntitiesByEntityIdResponse(arg) {
  if (!(arg instanceof szengine_pb.FindInterestingEntitiesByEntityIdResponse)) {
    throw new Error('Expected argument of type szengine.FindInterestingEntitiesByEntityIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindInterestingEntitiesByEntityIdResponse(buffer_arg) {
  return szengine_pb.FindInterestingEntitiesByEntityIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindInterestingEntitiesByRecordIdRequest(arg) {
  if (!(arg instanceof szengine_pb.FindInterestingEntitiesByRecordIdRequest)) {
    throw new Error('Expected argument of type szengine.FindInterestingEntitiesByRecordIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindInterestingEntitiesByRecordIdRequest(buffer_arg) {
  return szengine_pb.FindInterestingEntitiesByRecordIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindInterestingEntitiesByRecordIdResponse(arg) {
  if (!(arg instanceof szengine_pb.FindInterestingEntitiesByRecordIdResponse)) {
    throw new Error('Expected argument of type szengine.FindInterestingEntitiesByRecordIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindInterestingEntitiesByRecordIdResponse(buffer_arg) {
  return szengine_pb.FindInterestingEntitiesByRecordIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindNetworkByEntityIdRequest(arg) {
  if (!(arg instanceof szengine_pb.FindNetworkByEntityIdRequest)) {
    throw new Error('Expected argument of type szengine.FindNetworkByEntityIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindNetworkByEntityIdRequest(buffer_arg) {
  return szengine_pb.FindNetworkByEntityIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindNetworkByEntityIdResponse(arg) {
  if (!(arg instanceof szengine_pb.FindNetworkByEntityIdResponse)) {
    throw new Error('Expected argument of type szengine.FindNetworkByEntityIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindNetworkByEntityIdResponse(buffer_arg) {
  return szengine_pb.FindNetworkByEntityIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindNetworkByRecordIdRequest(arg) {
  if (!(arg instanceof szengine_pb.FindNetworkByRecordIdRequest)) {
    throw new Error('Expected argument of type szengine.FindNetworkByRecordIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindNetworkByRecordIdRequest(buffer_arg) {
  return szengine_pb.FindNetworkByRecordIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindNetworkByRecordIdResponse(arg) {
  if (!(arg instanceof szengine_pb.FindNetworkByRecordIdResponse)) {
    throw new Error('Expected argument of type szengine.FindNetworkByRecordIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindNetworkByRecordIdResponse(buffer_arg) {
  return szengine_pb.FindNetworkByRecordIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindPathByEntityIdRequest(arg) {
  if (!(arg instanceof szengine_pb.FindPathByEntityIdRequest)) {
    throw new Error('Expected argument of type szengine.FindPathByEntityIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindPathByEntityIdRequest(buffer_arg) {
  return szengine_pb.FindPathByEntityIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindPathByEntityIdResponse(arg) {
  if (!(arg instanceof szengine_pb.FindPathByEntityIdResponse)) {
    throw new Error('Expected argument of type szengine.FindPathByEntityIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindPathByEntityIdResponse(buffer_arg) {
  return szengine_pb.FindPathByEntityIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindPathByRecordIdRequest(arg) {
  if (!(arg instanceof szengine_pb.FindPathByRecordIdRequest)) {
    throw new Error('Expected argument of type szengine.FindPathByRecordIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindPathByRecordIdRequest(buffer_arg) {
  return szengine_pb.FindPathByRecordIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_FindPathByRecordIdResponse(arg) {
  if (!(arg instanceof szengine_pb.FindPathByRecordIdResponse)) {
    throw new Error('Expected argument of type szengine.FindPathByRecordIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_FindPathByRecordIdResponse(buffer_arg) {
  return szengine_pb.FindPathByRecordIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetActiveConfigIdRequest(arg) {
  if (!(arg instanceof szengine_pb.GetActiveConfigIdRequest)) {
    throw new Error('Expected argument of type szengine.GetActiveConfigIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetActiveConfigIdRequest(buffer_arg) {
  return szengine_pb.GetActiveConfigIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetActiveConfigIdResponse(arg) {
  if (!(arg instanceof szengine_pb.GetActiveConfigIdResponse)) {
    throw new Error('Expected argument of type szengine.GetActiveConfigIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetActiveConfigIdResponse(buffer_arg) {
  return szengine_pb.GetActiveConfigIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetEntityByEntityIdRequest(arg) {
  if (!(arg instanceof szengine_pb.GetEntityByEntityIdRequest)) {
    throw new Error('Expected argument of type szengine.GetEntityByEntityIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetEntityByEntityIdRequest(buffer_arg) {
  return szengine_pb.GetEntityByEntityIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetEntityByEntityIdResponse(arg) {
  if (!(arg instanceof szengine_pb.GetEntityByEntityIdResponse)) {
    throw new Error('Expected argument of type szengine.GetEntityByEntityIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetEntityByEntityIdResponse(buffer_arg) {
  return szengine_pb.GetEntityByEntityIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetEntityByRecordIdRequest(arg) {
  if (!(arg instanceof szengine_pb.GetEntityByRecordIdRequest)) {
    throw new Error('Expected argument of type szengine.GetEntityByRecordIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetEntityByRecordIdRequest(buffer_arg) {
  return szengine_pb.GetEntityByRecordIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetEntityByRecordIdResponse(arg) {
  if (!(arg instanceof szengine_pb.GetEntityByRecordIdResponse)) {
    throw new Error('Expected argument of type szengine.GetEntityByRecordIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetEntityByRecordIdResponse(buffer_arg) {
  return szengine_pb.GetEntityByRecordIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.GetRecordRequest)) {
    throw new Error('Expected argument of type szengine.GetRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetRecordRequest(buffer_arg) {
  return szengine_pb.GetRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.GetRecordResponse)) {
    throw new Error('Expected argument of type szengine.GetRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetRecordResponse(buffer_arg) {
  return szengine_pb.GetRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetRedoRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.GetRedoRecordRequest)) {
    throw new Error('Expected argument of type szengine.GetRedoRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetRedoRecordRequest(buffer_arg) {
  return szengine_pb.GetRedoRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetRedoRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.GetRedoRecordResponse)) {
    throw new Error('Expected argument of type szengine.GetRedoRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetRedoRecordResponse(buffer_arg) {
  return szengine_pb.GetRedoRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetStatsRequest(arg) {
  if (!(arg instanceof szengine_pb.GetStatsRequest)) {
    throw new Error('Expected argument of type szengine.GetStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetStatsRequest(buffer_arg) {
  return szengine_pb.GetStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetStatsResponse(arg) {
  if (!(arg instanceof szengine_pb.GetStatsResponse)) {
    throw new Error('Expected argument of type szengine.GetStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetStatsResponse(buffer_arg) {
  return szengine_pb.GetStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetVirtualEntityByRecordIdRequest(arg) {
  if (!(arg instanceof szengine_pb.GetVirtualEntityByRecordIdRequest)) {
    throw new Error('Expected argument of type szengine.GetVirtualEntityByRecordIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetVirtualEntityByRecordIdRequest(buffer_arg) {
  return szengine_pb.GetVirtualEntityByRecordIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_GetVirtualEntityByRecordIdResponse(arg) {
  if (!(arg instanceof szengine_pb.GetVirtualEntityByRecordIdResponse)) {
    throw new Error('Expected argument of type szengine.GetVirtualEntityByRecordIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_GetVirtualEntityByRecordIdResponse(buffer_arg) {
  return szengine_pb.GetVirtualEntityByRecordIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_HowEntityByEntityIdRequest(arg) {
  if (!(arg instanceof szengine_pb.HowEntityByEntityIdRequest)) {
    throw new Error('Expected argument of type szengine.HowEntityByEntityIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_HowEntityByEntityIdRequest(buffer_arg) {
  return szengine_pb.HowEntityByEntityIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_HowEntityByEntityIdResponse(arg) {
  if (!(arg instanceof szengine_pb.HowEntityByEntityIdResponse)) {
    throw new Error('Expected argument of type szengine.HowEntityByEntityIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_HowEntityByEntityIdResponse(buffer_arg) {
  return szengine_pb.HowEntityByEntityIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_PreprocessRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.PreprocessRecordRequest)) {
    throw new Error('Expected argument of type szengine.PreprocessRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_PreprocessRecordRequest(buffer_arg) {
  return szengine_pb.PreprocessRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_PreprocessRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.PreprocessRecordResponse)) {
    throw new Error('Expected argument of type szengine.PreprocessRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_PreprocessRecordResponse(buffer_arg) {
  return szengine_pb.PreprocessRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_PrimeEngineRequest(arg) {
  if (!(arg instanceof szengine_pb.PrimeEngineRequest)) {
    throw new Error('Expected argument of type szengine.PrimeEngineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_PrimeEngineRequest(buffer_arg) {
  return szengine_pb.PrimeEngineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_PrimeEngineResponse(arg) {
  if (!(arg instanceof szengine_pb.PrimeEngineResponse)) {
    throw new Error('Expected argument of type szengine.PrimeEngineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_PrimeEngineResponse(buffer_arg) {
  return szengine_pb.PrimeEngineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ProcessRedoRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.ProcessRedoRecordRequest)) {
    throw new Error('Expected argument of type szengine.ProcessRedoRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ProcessRedoRecordRequest(buffer_arg) {
  return szengine_pb.ProcessRedoRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ProcessRedoRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.ProcessRedoRecordResponse)) {
    throw new Error('Expected argument of type szengine.ProcessRedoRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ProcessRedoRecordResponse(buffer_arg) {
  return szengine_pb.ProcessRedoRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ReevaluateEntityRequest(arg) {
  if (!(arg instanceof szengine_pb.ReevaluateEntityRequest)) {
    throw new Error('Expected argument of type szengine.ReevaluateEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ReevaluateEntityRequest(buffer_arg) {
  return szengine_pb.ReevaluateEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ReevaluateEntityResponse(arg) {
  if (!(arg instanceof szengine_pb.ReevaluateEntityResponse)) {
    throw new Error('Expected argument of type szengine.ReevaluateEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ReevaluateEntityResponse(buffer_arg) {
  return szengine_pb.ReevaluateEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ReevaluateRecordRequest(arg) {
  if (!(arg instanceof szengine_pb.ReevaluateRecordRequest)) {
    throw new Error('Expected argument of type szengine.ReevaluateRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ReevaluateRecordRequest(buffer_arg) {
  return szengine_pb.ReevaluateRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ReevaluateRecordResponse(arg) {
  if (!(arg instanceof szengine_pb.ReevaluateRecordResponse)) {
    throw new Error('Expected argument of type szengine.ReevaluateRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ReevaluateRecordResponse(buffer_arg) {
  return szengine_pb.ReevaluateRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ReinitializeRequest(arg) {
  if (!(arg instanceof szengine_pb.ReinitializeRequest)) {
    throw new Error('Expected argument of type szengine.ReinitializeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ReinitializeRequest(buffer_arg) {
  return szengine_pb.ReinitializeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_ReinitializeResponse(arg) {
  if (!(arg instanceof szengine_pb.ReinitializeResponse)) {
    throw new Error('Expected argument of type szengine.ReinitializeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_ReinitializeResponse(buffer_arg) {
  return szengine_pb.ReinitializeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_SearchByAttributesRequest(arg) {
  if (!(arg instanceof szengine_pb.SearchByAttributesRequest)) {
    throw new Error('Expected argument of type szengine.SearchByAttributesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_SearchByAttributesRequest(buffer_arg) {
  return szengine_pb.SearchByAttributesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_SearchByAttributesResponse(arg) {
  if (!(arg instanceof szengine_pb.SearchByAttributesResponse)) {
    throw new Error('Expected argument of type szengine.SearchByAttributesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_SearchByAttributesResponse(buffer_arg) {
  return szengine_pb.SearchByAttributesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_StreamExportCsvEntityReportRequest(arg) {
  if (!(arg instanceof szengine_pb.StreamExportCsvEntityReportRequest)) {
    throw new Error('Expected argument of type szengine.StreamExportCsvEntityReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_StreamExportCsvEntityReportRequest(buffer_arg) {
  return szengine_pb.StreamExportCsvEntityReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_StreamExportCsvEntityReportResponse(arg) {
  if (!(arg instanceof szengine_pb.StreamExportCsvEntityReportResponse)) {
    throw new Error('Expected argument of type szengine.StreamExportCsvEntityReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_StreamExportCsvEntityReportResponse(buffer_arg) {
  return szengine_pb.StreamExportCsvEntityReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_StreamExportJsonEntityReportRequest(arg) {
  if (!(arg instanceof szengine_pb.StreamExportJsonEntityReportRequest)) {
    throw new Error('Expected argument of type szengine.StreamExportJsonEntityReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_StreamExportJsonEntityReportRequest(buffer_arg) {
  return szengine_pb.StreamExportJsonEntityReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_StreamExportJsonEntityReportResponse(arg) {
  if (!(arg instanceof szengine_pb.StreamExportJsonEntityReportResponse)) {
    throw new Error('Expected argument of type szengine.StreamExportJsonEntityReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_StreamExportJsonEntityReportResponse(buffer_arg) {
  return szengine_pb.StreamExportJsonEntityReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_WhyEntitiesRequest(arg) {
  if (!(arg instanceof szengine_pb.WhyEntitiesRequest)) {
    throw new Error('Expected argument of type szengine.WhyEntitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_WhyEntitiesRequest(buffer_arg) {
  return szengine_pb.WhyEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_WhyEntitiesResponse(arg) {
  if (!(arg instanceof szengine_pb.WhyEntitiesResponse)) {
    throw new Error('Expected argument of type szengine.WhyEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_WhyEntitiesResponse(buffer_arg) {
  return szengine_pb.WhyEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_WhyRecordInEntityRequest(arg) {
  if (!(arg instanceof szengine_pb.WhyRecordInEntityRequest)) {
    throw new Error('Expected argument of type szengine.WhyRecordInEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_WhyRecordInEntityRequest(buffer_arg) {
  return szengine_pb.WhyRecordInEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_WhyRecordInEntityResponse(arg) {
  if (!(arg instanceof szengine_pb.WhyRecordInEntityResponse)) {
    throw new Error('Expected argument of type szengine.WhyRecordInEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_WhyRecordInEntityResponse(buffer_arg) {
  return szengine_pb.WhyRecordInEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_WhyRecordsRequest(arg) {
  if (!(arg instanceof szengine_pb.WhyRecordsRequest)) {
    throw new Error('Expected argument of type szengine.WhyRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_WhyRecordsRequest(buffer_arg) {
  return szengine_pb.WhyRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szengine_WhyRecordsResponse(arg) {
  if (!(arg instanceof szengine_pb.WhyRecordsResponse)) {
    throw new Error('Expected argument of type szengine.WhyRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szengine_WhyRecordsResponse(buffer_arg) {
  return szengine_pb.WhyRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SzEngineService = exports.SzEngineService = {
  addRecord: {
    path: '/szengine.SzEngine/AddRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.AddRecordRequest,
    responseType: szengine_pb.AddRecordResponse,
    requestSerialize: serialize_szengine_AddRecordRequest,
    requestDeserialize: deserialize_szengine_AddRecordRequest,
    responseSerialize: serialize_szengine_AddRecordResponse,
    responseDeserialize: deserialize_szengine_AddRecordResponse,
  },
  closeExport: {
    path: '/szengine.SzEngine/CloseExport',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.CloseExportRequest,
    responseType: szengine_pb.CloseExportResponse,
    requestSerialize: serialize_szengine_CloseExportRequest,
    requestDeserialize: deserialize_szengine_CloseExportRequest,
    responseSerialize: serialize_szengine_CloseExportResponse,
    responseDeserialize: deserialize_szengine_CloseExportResponse,
  },
  countRedoRecords: {
    path: '/szengine.SzEngine/CountRedoRecords',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.CountRedoRecordsRequest,
    responseType: szengine_pb.CountRedoRecordsResponse,
    requestSerialize: serialize_szengine_CountRedoRecordsRequest,
    requestDeserialize: deserialize_szengine_CountRedoRecordsRequest,
    responseSerialize: serialize_szengine_CountRedoRecordsResponse,
    responseDeserialize: deserialize_szengine_CountRedoRecordsResponse,
  },
  deleteRecord: {
    path: '/szengine.SzEngine/DeleteRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.DeleteRecordRequest,
    responseType: szengine_pb.DeleteRecordResponse,
    requestSerialize: serialize_szengine_DeleteRecordRequest,
    requestDeserialize: deserialize_szengine_DeleteRecordRequest,
    responseSerialize: serialize_szengine_DeleteRecordResponse,
    responseDeserialize: deserialize_szengine_DeleteRecordResponse,
  },
  exportCsvEntityReport: {
    path: '/szengine.SzEngine/ExportCsvEntityReport',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.ExportCsvEntityReportRequest,
    responseType: szengine_pb.ExportCsvEntityReportResponse,
    requestSerialize: serialize_szengine_ExportCsvEntityReportRequest,
    requestDeserialize: deserialize_szengine_ExportCsvEntityReportRequest,
    responseSerialize: serialize_szengine_ExportCsvEntityReportResponse,
    responseDeserialize: deserialize_szengine_ExportCsvEntityReportResponse,
  },
  exportJsonEntityReport: {
    path: '/szengine.SzEngine/ExportJsonEntityReport',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.ExportJsonEntityReportRequest,
    responseType: szengine_pb.ExportJsonEntityReportResponse,
    requestSerialize: serialize_szengine_ExportJsonEntityReportRequest,
    requestDeserialize: deserialize_szengine_ExportJsonEntityReportRequest,
    responseSerialize: serialize_szengine_ExportJsonEntityReportResponse,
    responseDeserialize: deserialize_szengine_ExportJsonEntityReportResponse,
  },
  fetchNext: {
    path: '/szengine.SzEngine/FetchNext',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FetchNextRequest,
    responseType: szengine_pb.FetchNextResponse,
    requestSerialize: serialize_szengine_FetchNextRequest,
    requestDeserialize: deserialize_szengine_FetchNextRequest,
    responseSerialize: serialize_szengine_FetchNextResponse,
    responseDeserialize: deserialize_szengine_FetchNextResponse,
  },
  findInterestingEntitiesByEntityId: {
    path: '/szengine.SzEngine/FindInterestingEntitiesByEntityId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FindInterestingEntitiesByEntityIdRequest,
    responseType: szengine_pb.FindInterestingEntitiesByEntityIdResponse,
    requestSerialize: serialize_szengine_FindInterestingEntitiesByEntityIdRequest,
    requestDeserialize: deserialize_szengine_FindInterestingEntitiesByEntityIdRequest,
    responseSerialize: serialize_szengine_FindInterestingEntitiesByEntityIdResponse,
    responseDeserialize: deserialize_szengine_FindInterestingEntitiesByEntityIdResponse,
  },
  findInterestingEntitiesByRecordId: {
    path: '/szengine.SzEngine/FindInterestingEntitiesByRecordId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FindInterestingEntitiesByRecordIdRequest,
    responseType: szengine_pb.FindInterestingEntitiesByRecordIdResponse,
    requestSerialize: serialize_szengine_FindInterestingEntitiesByRecordIdRequest,
    requestDeserialize: deserialize_szengine_FindInterestingEntitiesByRecordIdRequest,
    responseSerialize: serialize_szengine_FindInterestingEntitiesByRecordIdResponse,
    responseDeserialize: deserialize_szengine_FindInterestingEntitiesByRecordIdResponse,
  },
  findNetworkByEntityId: {
    path: '/szengine.SzEngine/FindNetworkByEntityId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FindNetworkByEntityIdRequest,
    responseType: szengine_pb.FindNetworkByEntityIdResponse,
    requestSerialize: serialize_szengine_FindNetworkByEntityIdRequest,
    requestDeserialize: deserialize_szengine_FindNetworkByEntityIdRequest,
    responseSerialize: serialize_szengine_FindNetworkByEntityIdResponse,
    responseDeserialize: deserialize_szengine_FindNetworkByEntityIdResponse,
  },
  findNetworkByRecordId: {
    path: '/szengine.SzEngine/FindNetworkByRecordId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FindNetworkByRecordIdRequest,
    responseType: szengine_pb.FindNetworkByRecordIdResponse,
    requestSerialize: serialize_szengine_FindNetworkByRecordIdRequest,
    requestDeserialize: deserialize_szengine_FindNetworkByRecordIdRequest,
    responseSerialize: serialize_szengine_FindNetworkByRecordIdResponse,
    responseDeserialize: deserialize_szengine_FindNetworkByRecordIdResponse,
  },
  findPathByEntityId: {
    path: '/szengine.SzEngine/FindPathByEntityId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FindPathByEntityIdRequest,
    responseType: szengine_pb.FindPathByEntityIdResponse,
    requestSerialize: serialize_szengine_FindPathByEntityIdRequest,
    requestDeserialize: deserialize_szengine_FindPathByEntityIdRequest,
    responseSerialize: serialize_szengine_FindPathByEntityIdResponse,
    responseDeserialize: deserialize_szengine_FindPathByEntityIdResponse,
  },
  findPathByRecordId: {
    path: '/szengine.SzEngine/FindPathByRecordId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.FindPathByRecordIdRequest,
    responseType: szengine_pb.FindPathByRecordIdResponse,
    requestSerialize: serialize_szengine_FindPathByRecordIdRequest,
    requestDeserialize: deserialize_szengine_FindPathByRecordIdRequest,
    responseSerialize: serialize_szengine_FindPathByRecordIdResponse,
    responseDeserialize: deserialize_szengine_FindPathByRecordIdResponse,
  },
  getActiveConfigId: {
    path: '/szengine.SzEngine/GetActiveConfigId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetActiveConfigIdRequest,
    responseType: szengine_pb.GetActiveConfigIdResponse,
    requestSerialize: serialize_szengine_GetActiveConfigIdRequest,
    requestDeserialize: deserialize_szengine_GetActiveConfigIdRequest,
    responseSerialize: serialize_szengine_GetActiveConfigIdResponse,
    responseDeserialize: deserialize_szengine_GetActiveConfigIdResponse,
  },
  getEntityByEntityId: {
    path: '/szengine.SzEngine/GetEntityByEntityId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetEntityByEntityIdRequest,
    responseType: szengine_pb.GetEntityByEntityIdResponse,
    requestSerialize: serialize_szengine_GetEntityByEntityIdRequest,
    requestDeserialize: deserialize_szengine_GetEntityByEntityIdRequest,
    responseSerialize: serialize_szengine_GetEntityByEntityIdResponse,
    responseDeserialize: deserialize_szengine_GetEntityByEntityIdResponse,
  },
  getEntityByRecordId: {
    path: '/szengine.SzEngine/GetEntityByRecordId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetEntityByRecordIdRequest,
    responseType: szengine_pb.GetEntityByRecordIdResponse,
    requestSerialize: serialize_szengine_GetEntityByRecordIdRequest,
    requestDeserialize: deserialize_szengine_GetEntityByRecordIdRequest,
    responseSerialize: serialize_szengine_GetEntityByRecordIdResponse,
    responseDeserialize: deserialize_szengine_GetEntityByRecordIdResponse,
  },
  getRecord: {
    path: '/szengine.SzEngine/GetRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetRecordRequest,
    responseType: szengine_pb.GetRecordResponse,
    requestSerialize: serialize_szengine_GetRecordRequest,
    requestDeserialize: deserialize_szengine_GetRecordRequest,
    responseSerialize: serialize_szengine_GetRecordResponse,
    responseDeserialize: deserialize_szengine_GetRecordResponse,
  },
  getRedoRecord: {
    path: '/szengine.SzEngine/GetRedoRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetRedoRecordRequest,
    responseType: szengine_pb.GetRedoRecordResponse,
    requestSerialize: serialize_szengine_GetRedoRecordRequest,
    requestDeserialize: deserialize_szengine_GetRedoRecordRequest,
    responseSerialize: serialize_szengine_GetRedoRecordResponse,
    responseDeserialize: deserialize_szengine_GetRedoRecordResponse,
  },
  getStats: {
    path: '/szengine.SzEngine/GetStats',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetStatsRequest,
    responseType: szengine_pb.GetStatsResponse,
    requestSerialize: serialize_szengine_GetStatsRequest,
    requestDeserialize: deserialize_szengine_GetStatsRequest,
    responseSerialize: serialize_szengine_GetStatsResponse,
    responseDeserialize: deserialize_szengine_GetStatsResponse,
  },
  getVirtualEntityByRecordId: {
    path: '/szengine.SzEngine/GetVirtualEntityByRecordId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.GetVirtualEntityByRecordIdRequest,
    responseType: szengine_pb.GetVirtualEntityByRecordIdResponse,
    requestSerialize: serialize_szengine_GetVirtualEntityByRecordIdRequest,
    requestDeserialize: deserialize_szengine_GetVirtualEntityByRecordIdRequest,
    responseSerialize: serialize_szengine_GetVirtualEntityByRecordIdResponse,
    responseDeserialize: deserialize_szengine_GetVirtualEntityByRecordIdResponse,
  },
  howEntityByEntityId: {
    path: '/szengine.SzEngine/HowEntityByEntityId',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.HowEntityByEntityIdRequest,
    responseType: szengine_pb.HowEntityByEntityIdResponse,
    requestSerialize: serialize_szengine_HowEntityByEntityIdRequest,
    requestDeserialize: deserialize_szengine_HowEntityByEntityIdRequest,
    responseSerialize: serialize_szengine_HowEntityByEntityIdResponse,
    responseDeserialize: deserialize_szengine_HowEntityByEntityIdResponse,
  },
  preprocessRecord: {
    path: '/szengine.SzEngine/PreprocessRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.PreprocessRecordRequest,
    responseType: szengine_pb.PreprocessRecordResponse,
    requestSerialize: serialize_szengine_PreprocessRecordRequest,
    requestDeserialize: deserialize_szengine_PreprocessRecordRequest,
    responseSerialize: serialize_szengine_PreprocessRecordResponse,
    responseDeserialize: deserialize_szengine_PreprocessRecordResponse,
  },
  primeEngine: {
    path: '/szengine.SzEngine/PrimeEngine',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.PrimeEngineRequest,
    responseType: szengine_pb.PrimeEngineResponse,
    requestSerialize: serialize_szengine_PrimeEngineRequest,
    requestDeserialize: deserialize_szengine_PrimeEngineRequest,
    responseSerialize: serialize_szengine_PrimeEngineResponse,
    responseDeserialize: deserialize_szengine_PrimeEngineResponse,
  },
  processRedoRecord: {
    path: '/szengine.SzEngine/ProcessRedoRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.ProcessRedoRecordRequest,
    responseType: szengine_pb.ProcessRedoRecordResponse,
    requestSerialize: serialize_szengine_ProcessRedoRecordRequest,
    requestDeserialize: deserialize_szengine_ProcessRedoRecordRequest,
    responseSerialize: serialize_szengine_ProcessRedoRecordResponse,
    responseDeserialize: deserialize_szengine_ProcessRedoRecordResponse,
  },
  reevaluateEntity: {
    path: '/szengine.SzEngine/ReevaluateEntity',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.ReevaluateEntityRequest,
    responseType: szengine_pb.ReevaluateEntityResponse,
    requestSerialize: serialize_szengine_ReevaluateEntityRequest,
    requestDeserialize: deserialize_szengine_ReevaluateEntityRequest,
    responseSerialize: serialize_szengine_ReevaluateEntityResponse,
    responseDeserialize: deserialize_szengine_ReevaluateEntityResponse,
  },
  reevaluateRecord: {
    path: '/szengine.SzEngine/ReevaluateRecord',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.ReevaluateRecordRequest,
    responseType: szengine_pb.ReevaluateRecordResponse,
    requestSerialize: serialize_szengine_ReevaluateRecordRequest,
    requestDeserialize: deserialize_szengine_ReevaluateRecordRequest,
    responseSerialize: serialize_szengine_ReevaluateRecordResponse,
    responseDeserialize: deserialize_szengine_ReevaluateRecordResponse,
  },
  reinitialize: {
    path: '/szengine.SzEngine/Reinitialize',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.ReinitializeRequest,
    responseType: szengine_pb.ReinitializeResponse,
    requestSerialize: serialize_szengine_ReinitializeRequest,
    requestDeserialize: deserialize_szengine_ReinitializeRequest,
    responseSerialize: serialize_szengine_ReinitializeResponse,
    responseDeserialize: deserialize_szengine_ReinitializeResponse,
  },
  searchByAttributes: {
    path: '/szengine.SzEngine/SearchByAttributes',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.SearchByAttributesRequest,
    responseType: szengine_pb.SearchByAttributesResponse,
    requestSerialize: serialize_szengine_SearchByAttributesRequest,
    requestDeserialize: deserialize_szengine_SearchByAttributesRequest,
    responseSerialize: serialize_szengine_SearchByAttributesResponse,
    responseDeserialize: deserialize_szengine_SearchByAttributesResponse,
  },
  streamExportCsvEntityReport: {
    path: '/szengine.SzEngine/StreamExportCsvEntityReport',
    requestStream: false,
    responseStream: true,
    requestType: szengine_pb.StreamExportCsvEntityReportRequest,
    responseType: szengine_pb.StreamExportCsvEntityReportResponse,
    requestSerialize: serialize_szengine_StreamExportCsvEntityReportRequest,
    requestDeserialize: deserialize_szengine_StreamExportCsvEntityReportRequest,
    responseSerialize: serialize_szengine_StreamExportCsvEntityReportResponse,
    responseDeserialize: deserialize_szengine_StreamExportCsvEntityReportResponse,
  },
  streamExportJsonEntityReport: {
    path: '/szengine.SzEngine/StreamExportJsonEntityReport',
    requestStream: false,
    responseStream: true,
    requestType: szengine_pb.StreamExportJsonEntityReportRequest,
    responseType: szengine_pb.StreamExportJsonEntityReportResponse,
    requestSerialize: serialize_szengine_StreamExportJsonEntityReportRequest,
    requestDeserialize: deserialize_szengine_StreamExportJsonEntityReportRequest,
    responseSerialize: serialize_szengine_StreamExportJsonEntityReportResponse,
    responseDeserialize: deserialize_szengine_StreamExportJsonEntityReportResponse,
  },
  whyEntities: {
    path: '/szengine.SzEngine/WhyEntities',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.WhyEntitiesRequest,
    responseType: szengine_pb.WhyEntitiesResponse,
    requestSerialize: serialize_szengine_WhyEntitiesRequest,
    requestDeserialize: deserialize_szengine_WhyEntitiesRequest,
    responseSerialize: serialize_szengine_WhyEntitiesResponse,
    responseDeserialize: deserialize_szengine_WhyEntitiesResponse,
  },
  whyRecordInEntity: {
    path: '/szengine.SzEngine/WhyRecordInEntity',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.WhyRecordInEntityRequest,
    responseType: szengine_pb.WhyRecordInEntityResponse,
    requestSerialize: serialize_szengine_WhyRecordInEntityRequest,
    requestDeserialize: deserialize_szengine_WhyRecordInEntityRequest,
    responseSerialize: serialize_szengine_WhyRecordInEntityResponse,
    responseDeserialize: deserialize_szengine_WhyRecordInEntityResponse,
  },
  whyRecords: {
    path: '/szengine.SzEngine/WhyRecords',
    requestStream: false,
    responseStream: false,
    requestType: szengine_pb.WhyRecordsRequest,
    responseType: szengine_pb.WhyRecordsResponse,
    requestSerialize: serialize_szengine_WhyRecordsRequest,
    requestDeserialize: deserialize_szengine_WhyRecordsRequest,
    responseSerialize: serialize_szengine_WhyRecordsResponse,
    responseDeserialize: deserialize_szengine_WhyRecordsResponse,
  },
};

exports.SzEngineClient = grpc.makeGenericClientConstructor(SzEngineService);
