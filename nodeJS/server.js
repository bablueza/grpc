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

function ChatFunc(call, cb_Reply) {
  
  // console.log("ChatFunc:", call.metadata.get("apikey"));
  console.log("ChatFunc:", call.request.name);
  cb_Reply(null, { result: "Hello " + call.request.name });
}
function ChatStream(call) {
  console.log("ChatStream:");
  call.on("data", function (st) {
    console.log("data:", st.name);
    for (let x = 0; x < 5; x++) {
      st.result = x;
      call.write(st);
    }
    call.end();
  });
}

function main() {
  var server = new grpc.Server();
  server.addService(chat_proto.ChatService.service, {
    ChatFunc: ChatFunc,
    ChatStream: ChatStream,
  });
  server.bindAsync(
    "0.0.0.0:8099",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();
