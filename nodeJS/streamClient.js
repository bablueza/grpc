var PROTO_PATH = "../protos/chatbot.proto";

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var chat_proto = grpc.loadPackageDefinition(packageDefinition).chatPack;
const dataToSend = {
  name: "blue",
  result: 0,
};
function main() {
  var client = new chat_proto.ChatService(
    "localhost:8099",
    grpc.credentials.createInsecure()
  );
  var call = client.ChatStream();

  call.write(dataToSend);
  call.on("data", function (st) {
    console.log("Service stream :", st.result);
  });
  call.on("end", function () {
    console.log("end:");
  });
}
console.log("begin");
main();
console.log("end");
