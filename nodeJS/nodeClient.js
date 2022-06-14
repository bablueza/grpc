const path = require("path");
const PROTO_PATH = "../protos/chatbot.proto";

const GRPCClient = require("node-grpc-client");

const client = new GRPCClient(
  PROTO_PATH,
  "chatPack",
  "ChatService",
  "localhost:8099"
);

const dataToSend = {
  name: "blue",
};
const options = {
  metadata: {'apikey':'12345678'},
};
console.log("begin.");
client.runService(
  "ChatFunc",
  dataToSend,(err, res) => {
    console.log("Service response ", res);
  },
  options 
);

client.chatFuncAsync(
  dataToSend,(err, res) => {
    console.log("Service response ASync ", res);
  },
  options
);

console.log("end.");
