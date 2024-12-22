// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var szdiagnostic_pb = require('./szdiagnostic_pb.js');

function serialize_szdiagnostic_CheckDatastorePerformanceRequest(arg) {
  if (!(arg instanceof szdiagnostic_pb.CheckDatastorePerformanceRequest)) {
    throw new Error('Expected argument of type szdiagnostic.CheckDatastorePerformanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_CheckDatastorePerformanceRequest(buffer_arg) {
  return szdiagnostic_pb.CheckDatastorePerformanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_CheckDatastorePerformanceResponse(arg) {
  if (!(arg instanceof szdiagnostic_pb.CheckDatastorePerformanceResponse)) {
    throw new Error('Expected argument of type szdiagnostic.CheckDatastorePerformanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_CheckDatastorePerformanceResponse(buffer_arg) {
  return szdiagnostic_pb.CheckDatastorePerformanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_GetDatastoreInfoRequest(arg) {
  if (!(arg instanceof szdiagnostic_pb.GetDatastoreInfoRequest)) {
    throw new Error('Expected argument of type szdiagnostic.GetDatastoreInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_GetDatastoreInfoRequest(buffer_arg) {
  return szdiagnostic_pb.GetDatastoreInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_GetDatastoreInfoResponse(arg) {
  if (!(arg instanceof szdiagnostic_pb.GetDatastoreInfoResponse)) {
    throw new Error('Expected argument of type szdiagnostic.GetDatastoreInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_GetDatastoreInfoResponse(buffer_arg) {
  return szdiagnostic_pb.GetDatastoreInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_GetFeatureRequest(arg) {
  if (!(arg instanceof szdiagnostic_pb.GetFeatureRequest)) {
    throw new Error('Expected argument of type szdiagnostic.GetFeatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_GetFeatureRequest(buffer_arg) {
  return szdiagnostic_pb.GetFeatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_GetFeatureResponse(arg) {
  if (!(arg instanceof szdiagnostic_pb.GetFeatureResponse)) {
    throw new Error('Expected argument of type szdiagnostic.GetFeatureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_GetFeatureResponse(buffer_arg) {
  return szdiagnostic_pb.GetFeatureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_PurgeRepositoryRequest(arg) {
  if (!(arg instanceof szdiagnostic_pb.PurgeRepositoryRequest)) {
    throw new Error('Expected argument of type szdiagnostic.PurgeRepositoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_PurgeRepositoryRequest(buffer_arg) {
  return szdiagnostic_pb.PurgeRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_PurgeRepositoryResponse(arg) {
  if (!(arg instanceof szdiagnostic_pb.PurgeRepositoryResponse)) {
    throw new Error('Expected argument of type szdiagnostic.PurgeRepositoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_PurgeRepositoryResponse(buffer_arg) {
  return szdiagnostic_pb.PurgeRepositoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_ReinitializeRequest(arg) {
  if (!(arg instanceof szdiagnostic_pb.ReinitializeRequest)) {
    throw new Error('Expected argument of type szdiagnostic.ReinitializeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_ReinitializeRequest(buffer_arg) {
  return szdiagnostic_pb.ReinitializeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szdiagnostic_ReinitializeResponse(arg) {
  if (!(arg instanceof szdiagnostic_pb.ReinitializeResponse)) {
    throw new Error('Expected argument of type szdiagnostic.ReinitializeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szdiagnostic_ReinitializeResponse(buffer_arg) {
  return szdiagnostic_pb.ReinitializeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SzDiagnosticService = exports.SzDiagnosticService = {
  checkDatastorePerformance: {
    path: '/szdiagnostic.SzDiagnostic/CheckDatastorePerformance',
    requestStream: false,
    responseStream: false,
    requestType: szdiagnostic_pb.CheckDatastorePerformanceRequest,
    responseType: szdiagnostic_pb.CheckDatastorePerformanceResponse,
    requestSerialize: serialize_szdiagnostic_CheckDatastorePerformanceRequest,
    requestDeserialize: deserialize_szdiagnostic_CheckDatastorePerformanceRequest,
    responseSerialize: serialize_szdiagnostic_CheckDatastorePerformanceResponse,
    responseDeserialize: deserialize_szdiagnostic_CheckDatastorePerformanceResponse,
  },
  getDatastoreInfo: {
    path: '/szdiagnostic.SzDiagnostic/GetDatastoreInfo',
    requestStream: false,
    responseStream: false,
    requestType: szdiagnostic_pb.GetDatastoreInfoRequest,
    responseType: szdiagnostic_pb.GetDatastoreInfoResponse,
    requestSerialize: serialize_szdiagnostic_GetDatastoreInfoRequest,
    requestDeserialize: deserialize_szdiagnostic_GetDatastoreInfoRequest,
    responseSerialize: serialize_szdiagnostic_GetDatastoreInfoResponse,
    responseDeserialize: deserialize_szdiagnostic_GetDatastoreInfoResponse,
  },
  getFeature: {
    path: '/szdiagnostic.SzDiagnostic/GetFeature',
    requestStream: false,
    responseStream: false,
    requestType: szdiagnostic_pb.GetFeatureRequest,
    responseType: szdiagnostic_pb.GetFeatureResponse,
    requestSerialize: serialize_szdiagnostic_GetFeatureRequest,
    requestDeserialize: deserialize_szdiagnostic_GetFeatureRequest,
    responseSerialize: serialize_szdiagnostic_GetFeatureResponse,
    responseDeserialize: deserialize_szdiagnostic_GetFeatureResponse,
  },
  purgeRepository: {
    path: '/szdiagnostic.SzDiagnostic/PurgeRepository',
    requestStream: false,
    responseStream: false,
    requestType: szdiagnostic_pb.PurgeRepositoryRequest,
    responseType: szdiagnostic_pb.PurgeRepositoryResponse,
    requestSerialize: serialize_szdiagnostic_PurgeRepositoryRequest,
    requestDeserialize: deserialize_szdiagnostic_PurgeRepositoryRequest,
    responseSerialize: serialize_szdiagnostic_PurgeRepositoryResponse,
    responseDeserialize: deserialize_szdiagnostic_PurgeRepositoryResponse,
  },
  reinitialize: {
    path: '/szdiagnostic.SzDiagnostic/Reinitialize',
    requestStream: false,
    responseStream: false,
    requestType: szdiagnostic_pb.ReinitializeRequest,
    responseType: szdiagnostic_pb.ReinitializeResponse,
    requestSerialize: serialize_szdiagnostic_ReinitializeRequest,
    requestDeserialize: deserialize_szdiagnostic_ReinitializeRequest,
    responseSerialize: serialize_szdiagnostic_ReinitializeResponse,
    responseDeserialize: deserialize_szdiagnostic_ReinitializeResponse,
  },
};

exports.SzDiagnosticClient = grpc.makeGenericClientConstructor(SzDiagnosticService);
