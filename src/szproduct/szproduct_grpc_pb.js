// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var szproduct_pb = require('./szproduct_pb.js');

function serialize_szproduct_GetLicenseRequest(arg) {
  if (!(arg instanceof szproduct_pb.GetLicenseRequest)) {
    throw new Error('Expected argument of type szproduct.GetLicenseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szproduct_GetLicenseRequest(buffer_arg) {
  return szproduct_pb.GetLicenseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szproduct_GetLicenseResponse(arg) {
  if (!(arg instanceof szproduct_pb.GetLicenseResponse)) {
    throw new Error('Expected argument of type szproduct.GetLicenseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szproduct_GetLicenseResponse(buffer_arg) {
  return szproduct_pb.GetLicenseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szproduct_GetVersionRequest(arg) {
  if (!(arg instanceof szproduct_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type szproduct.GetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szproduct_GetVersionRequest(buffer_arg) {
  return szproduct_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_szproduct_GetVersionResponse(arg) {
  if (!(arg instanceof szproduct_pb.GetVersionResponse)) {
    throw new Error('Expected argument of type szproduct.GetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_szproduct_GetVersionResponse(buffer_arg) {
  return szproduct_pb.GetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SzProductService = exports.SzProductService = {
  getLicense: {
    path: '/szproduct.SzProduct/GetLicense',
    requestStream: false,
    responseStream: false,
    requestType: szproduct_pb.GetLicenseRequest,
    responseType: szproduct_pb.GetLicenseResponse,
    requestSerialize: serialize_szproduct_GetLicenseRequest,
    requestDeserialize: deserialize_szproduct_GetLicenseRequest,
    responseSerialize: serialize_szproduct_GetLicenseResponse,
    responseDeserialize: deserialize_szproduct_GetLicenseResponse,
  },
  getVersion: {
    path: '/szproduct.SzProduct/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: szproduct_pb.GetVersionRequest,
    responseType: szproduct_pb.GetVersionResponse,
    requestSerialize: serialize_szproduct_GetVersionRequest,
    requestDeserialize: deserialize_szproduct_GetVersionRequest,
    responseSerialize: serialize_szproduct_GetVersionResponse,
    responseDeserialize: deserialize_szproduct_GetVersionResponse,
  },
};

exports.SzProductClient = grpc.makeGenericClientConstructor(SzProductService);
