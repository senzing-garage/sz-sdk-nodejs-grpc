// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var szconfig_pb = require('./szconfig_pb.js');

function serialize_szconfig_AddDataSourceRequest(arg) {
  if (!(arg instanceof szconfig_pb.AddDataSourceRequest)) {
    throw new Error('Expected argument of type szconfig.AddDataSourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_AddDataSourceRequest(buffer_arg) {
  return szconfig_pb.AddDataSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_AddDataSourceResponse(arg) {
  if (!(arg instanceof szconfig_pb.AddDataSourceResponse)) {
    throw new Error('Expected argument of type szconfig.AddDataSourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_AddDataSourceResponse(buffer_arg) {
  return szconfig_pb.AddDataSourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_CloseConfigRequest(arg) {
  if (!(arg instanceof szconfig_pb.CloseConfigRequest)) {
    throw new Error('Expected argument of type szconfig.CloseConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_CloseConfigRequest(buffer_arg) {
  return szconfig_pb.CloseConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_CloseConfigResponse(arg) {
  if (!(arg instanceof szconfig_pb.CloseConfigResponse)) {
    throw new Error('Expected argument of type szconfig.CloseConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_CloseConfigResponse(buffer_arg) {
  return szconfig_pb.CloseConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_CreateConfigRequest(arg) {
  if (!(arg instanceof szconfig_pb.CreateConfigRequest)) {
    throw new Error('Expected argument of type szconfig.CreateConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_CreateConfigRequest(buffer_arg) {
  return szconfig_pb.CreateConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_CreateConfigResponse(arg) {
  if (!(arg instanceof szconfig_pb.CreateConfigResponse)) {
    throw new Error('Expected argument of type szconfig.CreateConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_CreateConfigResponse(buffer_arg) {
  return szconfig_pb.CreateConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_DeleteDataSourceRequest(arg) {
  if (!(arg instanceof szconfig_pb.DeleteDataSourceRequest)) {
    throw new Error('Expected argument of type szconfig.DeleteDataSourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_DeleteDataSourceRequest(buffer_arg) {
  return szconfig_pb.DeleteDataSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_DeleteDataSourceResponse(arg) {
  if (!(arg instanceof szconfig_pb.DeleteDataSourceResponse)) {
    throw new Error('Expected argument of type szconfig.DeleteDataSourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_DeleteDataSourceResponse(buffer_arg) {
  return szconfig_pb.DeleteDataSourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_ExportConfigRequest(arg) {
  if (!(arg instanceof szconfig_pb.ExportConfigRequest)) {
    throw new Error('Expected argument of type szconfig.ExportConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_ExportConfigRequest(buffer_arg) {
  return szconfig_pb.ExportConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_ExportConfigResponse(arg) {
  if (!(arg instanceof szconfig_pb.ExportConfigResponse)) {
    throw new Error('Expected argument of type szconfig.ExportConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_ExportConfigResponse(buffer_arg) {
  return szconfig_pb.ExportConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_GetDataSourcesRequest(arg) {
  if (!(arg instanceof szconfig_pb.GetDataSourcesRequest)) {
    throw new Error('Expected argument of type szconfig.GetDataSourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_GetDataSourcesRequest(buffer_arg) {
  return szconfig_pb.GetDataSourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_GetDataSourcesResponse(arg) {
  if (!(arg instanceof szconfig_pb.GetDataSourcesResponse)) {
    throw new Error('Expected argument of type szconfig.GetDataSourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_GetDataSourcesResponse(buffer_arg) {
  return szconfig_pb.GetDataSourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_ImportConfigRequest(arg) {
  if (!(arg instanceof szconfig_pb.ImportConfigRequest)) {
    throw new Error('Expected argument of type szconfig.ImportConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_ImportConfigRequest(buffer_arg) {
  return szconfig_pb.ImportConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szconfig_ImportConfigResponse(arg) {
  if (!(arg instanceof szconfig_pb.ImportConfigResponse)) {
    throw new Error('Expected argument of type szconfig.ImportConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szconfig_ImportConfigResponse(buffer_arg) {
  return szconfig_pb.ImportConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SzConfigService = exports.SzConfigService = {
  addDataSource: {
    path: '/szconfig.SzConfig/AddDataSource',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.AddDataSourceRequest,
    responseType: szconfig_pb.AddDataSourceResponse,
    requestSerialize: serialize_szconfig_AddDataSourceRequest,
    requestDeserialize: deserialize_szconfig_AddDataSourceRequest,
    responseSerialize: serialize_szconfig_AddDataSourceResponse,
    responseDeserialize: deserialize_szconfig_AddDataSourceResponse,
  },
  closeConfig: {
    path: '/szconfig.SzConfig/CloseConfig',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.CloseConfigRequest,
    responseType: szconfig_pb.CloseConfigResponse,
    requestSerialize: serialize_szconfig_CloseConfigRequest,
    requestDeserialize: deserialize_szconfig_CloseConfigRequest,
    responseSerialize: serialize_szconfig_CloseConfigResponse,
    responseDeserialize: deserialize_szconfig_CloseConfigResponse,
  },
  createConfig: {
    path: '/szconfig.SzConfig/CreateConfig',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.CreateConfigRequest,
    responseType: szconfig_pb.CreateConfigResponse,
    requestSerialize: serialize_szconfig_CreateConfigRequest,
    requestDeserialize: deserialize_szconfig_CreateConfigRequest,
    responseSerialize: serialize_szconfig_CreateConfigResponse,
    responseDeserialize: deserialize_szconfig_CreateConfigResponse,
  },
  deleteDataSource: {
    path: '/szconfig.SzConfig/DeleteDataSource',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.DeleteDataSourceRequest,
    responseType: szconfig_pb.DeleteDataSourceResponse,
    requestSerialize: serialize_szconfig_DeleteDataSourceRequest,
    requestDeserialize: deserialize_szconfig_DeleteDataSourceRequest,
    responseSerialize: serialize_szconfig_DeleteDataSourceResponse,
    responseDeserialize: deserialize_szconfig_DeleteDataSourceResponse,
  },
  exportConfig: {
    path: '/szconfig.SzConfig/ExportConfig',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.ExportConfigRequest,
    responseType: szconfig_pb.ExportConfigResponse,
    requestSerialize: serialize_szconfig_ExportConfigRequest,
    requestDeserialize: deserialize_szconfig_ExportConfigRequest,
    responseSerialize: serialize_szconfig_ExportConfigResponse,
    responseDeserialize: deserialize_szconfig_ExportConfigResponse,
  },
  getDataSources: {
    path: '/szconfig.SzConfig/GetDataSources',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.GetDataSourcesRequest,
    responseType: szconfig_pb.GetDataSourcesResponse,
    requestSerialize: serialize_szconfig_GetDataSourcesRequest,
    requestDeserialize: deserialize_szconfig_GetDataSourcesRequest,
    responseSerialize: serialize_szconfig_GetDataSourcesResponse,
    responseDeserialize: deserialize_szconfig_GetDataSourcesResponse,
  },
  importConfig: {
    path: '/szconfig.SzConfig/ImportConfig',
    requestStream: false,
    responseStream: false,
    requestType: szconfig_pb.ImportConfigRequest,
    responseType: szconfig_pb.ImportConfigResponse,
    requestSerialize: serialize_szconfig_ImportConfigRequest,
    requestDeserialize: deserialize_szconfig_ImportConfigRequest,
    responseSerialize: serialize_szconfig_ImportConfigResponse,
    responseDeserialize: deserialize_szconfig_ImportConfigResponse,
  },
};

exports.SzConfigClient = grpc.makeGenericClientConstructor(SzConfigService);
