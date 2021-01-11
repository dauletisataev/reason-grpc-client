/**
 * @fileoverview gRPC-Web generated client stub for buhta
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.buhta = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.buhta.EchoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.buhta.EchoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buhta.EchoRequest,
 *   !proto.buhta.EchoResponse>}
 */
const methodDescriptor_EchoService_Echo = new grpc.web.MethodDescriptor(
  '/buhta.EchoService/Echo',
  grpc.web.MethodType.UNARY,
  proto.buhta.EchoRequest,
  proto.buhta.EchoResponse,
  /**
   * @param {!proto.buhta.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buhta.EchoRequest,
 *   !proto.buhta.EchoResponse>}
 */
const methodInfo_EchoService_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buhta.EchoResponse,
  /**
   * @param {!proto.buhta.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.buhta.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.buhta.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buhta.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo,
      callback);
};


/**
 * @param {!proto.buhta.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buhta.EchoResponse>}
 *     Promise that resolves to the response
 */
proto.buhta.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buhta.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buhta.EchoRequest,
 *   !proto.buhta.EchoResponse>}
 */
const methodDescriptor_EchoService_EchoAbort = new grpc.web.MethodDescriptor(
  '/buhta.EchoService/EchoAbort',
  grpc.web.MethodType.UNARY,
  proto.buhta.EchoRequest,
  proto.buhta.EchoResponse,
  /**
   * @param {!proto.buhta.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buhta.EchoRequest,
 *   !proto.buhta.EchoResponse>}
 */
const methodInfo_EchoService_EchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buhta.EchoResponse,
  /**
   * @param {!proto.buhta.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.buhta.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.buhta.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServiceClient.prototype.echoAbort =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buhta.EchoService/EchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoAbort,
      callback);
};


/**
 * @param {!proto.buhta.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buhta.EchoResponse>}
 *     Promise that resolves to the response
 */
proto.buhta.EchoServicePromiseClient.prototype.echoAbort =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buhta.EchoService/EchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoAbort);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buhta.Empty,
 *   !proto.buhta.Empty>}
 */
const methodDescriptor_EchoService_NoOp = new grpc.web.MethodDescriptor(
  '/buhta.EchoService/NoOp',
  grpc.web.MethodType.UNARY,
  proto.buhta.Empty,
  proto.buhta.Empty,
  /**
   * @param {!proto.buhta.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buhta.Empty,
 *   !proto.buhta.Empty>}
 */
const methodInfo_EchoService_NoOp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buhta.Empty,
  /**
   * @param {!proto.buhta.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.Empty.deserializeBinary
);


/**
 * @param {!proto.buhta.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.buhta.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServiceClient.prototype.noOp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buhta.EchoService/NoOp',
      request,
      metadata || {},
      methodDescriptor_EchoService_NoOp,
      callback);
};


/**
 * @param {!proto.buhta.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buhta.Empty>}
 *     Promise that resolves to the response
 */
proto.buhta.EchoServicePromiseClient.prototype.noOp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buhta.EchoService/NoOp',
      request,
      metadata || {},
      methodDescriptor_EchoService_NoOp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buhta.ServerStreamingEchoRequest,
 *   !proto.buhta.ServerStreamingEchoResponse>}
 */
const methodDescriptor_EchoService_ServerStreamingEcho = new grpc.web.MethodDescriptor(
  '/buhta.EchoService/ServerStreamingEcho',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.buhta.ServerStreamingEchoRequest,
  proto.buhta.ServerStreamingEchoResponse,
  /**
   * @param {!proto.buhta.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buhta.ServerStreamingEchoRequest,
 *   !proto.buhta.ServerStreamingEchoResponse>}
 */
const methodInfo_EchoService_ServerStreamingEcho = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buhta.ServerStreamingEchoResponse,
  /**
   * @param {!proto.buhta.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.buhta.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServiceClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/buhta.EchoService/ServerStreamingEcho',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEcho);
};


/**
 * @param {!proto.buhta.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServicePromiseClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/buhta.EchoService/ServerStreamingEcho',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEcho);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buhta.ServerStreamingEchoRequest,
 *   !proto.buhta.ServerStreamingEchoResponse>}
 */
const methodDescriptor_EchoService_ServerStreamingEchoAbort = new grpc.web.MethodDescriptor(
  '/buhta.EchoService/ServerStreamingEchoAbort',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.buhta.ServerStreamingEchoRequest,
  proto.buhta.ServerStreamingEchoResponse,
  /**
   * @param {!proto.buhta.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buhta.ServerStreamingEchoRequest,
 *   !proto.buhta.ServerStreamingEchoResponse>}
 */
const methodInfo_EchoService_ServerStreamingEchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buhta.ServerStreamingEchoResponse,
  /**
   * @param {!proto.buhta.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buhta.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.buhta.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServiceClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/buhta.EchoService/ServerStreamingEchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEchoAbort);
};


/**
 * @param {!proto.buhta.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.buhta.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.buhta.EchoServicePromiseClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/buhta.EchoService/ServerStreamingEchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEchoAbort);
};


module.exports = proto.buhta;

