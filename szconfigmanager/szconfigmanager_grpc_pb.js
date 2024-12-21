// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var szconfigmanager_pb = require('./szconfigmanager_pb.js');

function serialize_szconfigmanager_AddConfigRequest(arg) {
  if (!(arg instanceof szconfigmanager_pb.AddConfigRequest)) {
    throw new Error('Expected argument of type szconfigmanager.AddConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_AddConfigRequest(buffer_arg) {
  return szconfigmanager_pb.AddConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_AddConfigResponse(arg) {
  if (!(arg instanceof szconfigmanager_pb.AddConfigResponse)) {
    throw new Error('Expected argument of type szconfigmanager.AddConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_AddConfigResponse(buffer_arg) {
  return szconfigmanager_pb.AddConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_GetConfigRequest(arg) {
  if (!(arg instanceof szconfigmanager_pb.GetConfigRequest)) {
    throw new Error('Expected argument of type szconfigmanager.GetConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_GetConfigRequest(buffer_arg) {
  return szconfigmanager_pb.GetConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_GetConfigResponse(arg) {
  if (!(arg instanceof szconfigmanager_pb.GetConfigResponse)) {
    throw new Error('Expected argument of type szconfigmanager.GetConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_GetConfigResponse(buffer_arg) {
  return szconfigmanager_pb.GetConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_GetConfigsRequest(arg) {
  if (!(arg instanceof szconfigmanager_pb.GetConfigsRequest)) {
    throw new Error('Expected argument of type szconfigmanager.GetConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_GetConfigsRequest(buffer_arg) {
  return szconfigmanager_pb.GetConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_GetConfigsResponse(arg) {
  if (!(arg instanceof szconfigmanager_pb.GetConfigsResponse)) {
    throw new Error('Expected argument of type szconfigmanager.GetConfigsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_GetConfigsResponse(buffer_arg) {
  return szconfigmanager_pb.GetConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_GetDefaultConfigIdRequest(arg) {
  if (!(arg instanceof szconfigmanager_pb.GetDefaultConfigIdRequest)) {
    throw new Error('Expected argument of type szconfigmanager.GetDefaultConfigIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_GetDefaultConfigIdRequest(buffer_arg) {
  return szconfigmanager_pb.GetDefaultConfigIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_GetDefaultConfigIdResponse(arg) {
  if (!(arg instanceof szconfigmanager_pb.GetDefaultConfigIdResponse)) {
    throw new Error('Expected argument of type szconfigmanager.GetDefaultConfigIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_GetDefaultConfigIdResponse(buffer_arg) {
  return szconfigmanager_pb.GetDefaultConfigIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_ReplaceDefaultConfigIdRequest(arg) {
  if (!(arg instanceof szconfigmanager_pb.ReplaceDefaultConfigIdRequest)) {
    throw new Error('Expected argument of type szconfigmanager.ReplaceDefaultConfigIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_ReplaceDefaultConfigIdRequest(buffer_arg) {
  return szconfigmanager_pb.ReplaceDefaultConfigIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_ReplaceDefaultConfigIdResponse(arg) {
  if (!(arg instanceof szconfigmanager_pb.ReplaceDefaultConfigIdResponse)) {
    throw new Error('Expected argument of type szconfigmanager.ReplaceDefaultConfigIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_ReplaceDefaultConfigIdResponse(buffer_arg) {
  return szconfigmanager_pb.ReplaceDefaultConfigIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_SetDefaultConfigIdRequest(arg) {
  if (!(arg instanceof szconfigmanager_pb.SetDefaultConfigIdRequest)) {
    throw new Error('Expected argument of type szconfigmanager.SetDefaultConfigIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_SetDefaultConfigIdRequest(buffer_arg) {
  return szconfigmanager_pb.SetDefaultConfigIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfigmanager_SetDefaultConfigIdResponse(arg) {
  if (!(arg instanceof szconfigmanager_pb.SetDefaultConfigIdResponse)) {
    throw new Error('Expected argument of type szconfigmanager.SetDefaultConfigIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfigmanager_SetDefaultConfigIdResponse(buffer_arg) {
  return szconfigmanager_pb.SetDefaultConfigIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SzConfigManagerService = exports.SzConfigManagerService = {
  addConfig: {
    path: '/szconfigmanager.SzConfigManager/AddConfig',
    requestStream: false,
    responseStream: false,
    requestType: szconfigmanager_pb.AddConfigRequest,
    responseType: szconfigmanager_pb.AddConfigResponse,
    requestSerialize: serialize_szconfigmanager_AddConfigRequest,
    requestDeserialize: deserialize_szconfigmanager_AddConfigRequest,
    responseSerialize: serialize_szconfigmanager_AddConfigResponse,
    responseDeserialize: deserialize_szconfigmanager_AddConfigResponse,
  },
  getConfig: {
    path: '/szconfigmanager.SzConfigManager/GetConfig',
    requestStream: false,
    responseStream: false,
    requestType: szconfigmanager_pb.GetConfigRequest,
    responseType: szconfigmanager_pb.GetConfigResponse,
    requestSerialize: serialize_szconfigmanager_GetConfigRequest,
    requestDeserialize: deserialize_szconfigmanager_GetConfigRequest,
    responseSerialize: serialize_szconfigmanager_GetConfigResponse,
    responseDeserialize: deserialize_szconfigmanager_GetConfigResponse,
  },
  getConfigs: {
    path: '/szconfigmanager.SzConfigManager/GetConfigs',
    requestStream: false,
    responseStream: false,
    requestType: szconfigmanager_pb.GetConfigsRequest,
    responseType: szconfigmanager_pb.GetConfigsResponse,
    requestSerialize: serialize_szconfigmanager_GetConfigsRequest,
    requestDeserialize: deserialize_szconfigmanager_GetConfigsRequest,
    responseSerialize: serialize_szconfigmanager_GetConfigsResponse,
    responseDeserialize: deserialize_szconfigmanager_GetConfigsResponse,
  },
  getDefaultConfigId: {
    path: '/szconfigmanager.SzConfigManager/GetDefaultConfigId',
    requestStream: false,
    responseStream: false,
    requestType: szconfigmanager_pb.GetDefaultConfigIdRequest,
    responseType: szconfigmanager_pb.GetDefaultConfigIdResponse,
    requestSerialize: serialize_szconfigmanager_GetDefaultConfigIdRequest,
    requestDeserialize: deserialize_szconfigmanager_GetDefaultConfigIdRequest,
    responseSerialize: serialize_szconfigmanager_GetDefaultConfigIdResponse,
    responseDeserialize: deserialize_szconfigmanager_GetDefaultConfigIdResponse,
  },
  replaceDefaultConfigId: {
    path: '/szconfigmanager.SzConfigManager/ReplaceDefaultConfigId',
    requestStream: false,
    responseStream: false,
    requestType: szconfigmanager_pb.ReplaceDefaultConfigIdRequest,
    responseType: szconfigmanager_pb.ReplaceDefaultConfigIdResponse,
    requestSerialize: serialize_szconfigmanager_ReplaceDefaultConfigIdRequest,
    requestDeserialize: deserialize_szconfigmanager_ReplaceDefaultConfigIdRequest,
    responseSerialize: serialize_szconfigmanager_ReplaceDefaultConfigIdResponse,
    responseDeserialize: deserialize_szconfigmanager_ReplaceDefaultConfigIdResponse,
  },
  setDefaultConfigId: {
    path: '/szconfigmanager.SzConfigManager/SetDefaultConfigId',
    requestStream: false,
    responseStream: false,
    requestType: szconfigmanager_pb.SetDefaultConfigIdRequest,
    responseType: szconfigmanager_pb.SetDefaultConfigIdResponse,
    requestSerialize: serialize_szconfigmanager_SetDefaultConfigIdRequest,
    requestDeserialize: deserialize_szconfigmanager_SetDefaultConfigIdRequest,
    responseSerialize: serialize_szconfigmanager_SetDefaultConfigIdResponse,
    responseDeserialize: deserialize_szconfigmanager_SetDefaultConfigIdResponse,
  },
};

exports.SzConfigManagerClient = grpc.makeGenericClientConstructor(SzConfigManagerService);
