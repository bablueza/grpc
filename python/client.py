from __future__ import print_function

import logging

import grpc
import chatbot_pb2
import chatbot_pb2_grpc


def run():
    with grpc.insecure_channel('localhost:8099') as channel:
        stub = chatbot_pb2_grpc.ChatServiceStub(channel)
        response = stub.ChatFunc(chatbot_pb2.ChatRequest(name='blue'))
    print("Chat client received: " + response.result)


if __name__ == '__main__':
    logging.basicConfig()
    run()