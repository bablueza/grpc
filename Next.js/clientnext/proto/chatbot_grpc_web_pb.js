/**
 * @fileoverview gRPC-Web generated client stub for chatPack
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chatPack = require('./chatbot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chatPack.ChatServiceClient =
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
proto.chatPack.ChatServicePromiseClient =
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
 *   !proto.chatPack.ChatRequest,
 *   !proto.chatPack.ChatReply>}
 */
const methodDescriptor_ChatService_ChatFunc = new grpc.web.MethodDescriptor(
  '/chatPack.ChatService/ChatFunc',
  grpc.web.MethodType.UNARY,
  proto.chatPack.ChatRequest,
  proto.chatPack.ChatReply,
  /**
   * @param {!proto.chatPack.ChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatPack.ChatReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatPack.ChatRequest,
 *   !proto.chatPack.ChatReply>}
 */
const methodInfo_ChatService_ChatFunc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatPack.ChatReply,
  /**
   * @param {!proto.chatPack.ChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatPack.ChatReply.deserializeBinary
);


/**
 * @param {!proto.chatPack.ChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chatPack.ChatReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatPack.ChatReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatPack.ChatServiceClient.prototype.chatFunc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatPack.ChatService/ChatFunc',
      request,
      metadata || {},
      methodDescriptor_ChatService_ChatFunc,
      callback);
};


/**
 * @param {!proto.chatPack.ChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatPack.ChatReply>}
 *     A native promise that resolves to the response
 */
proto.chatPack.ChatServicePromiseClient.prototype.chatFunc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatPack.ChatService/ChatFunc',
      request,
      metadata || {},
      methodDescriptor_ChatService_ChatFunc);
};


module.exports = proto.chatPack;

