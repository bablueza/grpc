from concurrent import futures
import logging

import grpc
import chatbot_pb2
import chatbot_pb2_grpc


class ChatService(chatbot_pb2_grpc.ChatService):

    def ChatFunc(self, request, context):
        return chatbot_pb2.ChatReply(result='Hello, %s!' % request.name)
    def ChatStream(self, request_iterator, context):
        for new_data in request_iterator:
            print('ChatStream Recive data:'+new_data.name+':'+new_data.result)
            yield chatbot_pb2.StreamText(name='1',result=new_data.result+' ok')
        print('End ChatStream.')

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chatbot_pb2_grpc.add_ChatServiceServicer_to_server(ChatService(), server)
    server.add_insecure_port('[::]:8099')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()