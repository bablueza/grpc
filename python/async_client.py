import asyncio
import logging

import grpc
import chatbot_pb2
import chatbot_pb2_grpc


async def runAsync() -> None:
    async with grpc.aio.insecure_channel('localhost:8099') as channel:
        stub = chatbot_pb2_grpc.ChatServiceStub(channel)
        response = await stub.ChatFunc(chatbot_pb2.ChatRequest(name='you'))
    print("Chat client received: " + response.result)


if __name__ == '__main__':
    logging.basicConfig()
    # asyncio.run(run())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(runAsync())