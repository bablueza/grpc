import './App.css';
import React, { useState, useEffect, useRef } from "react";

import {ChatRequest, ChatReply} from './proto/chatbot_pb'
import {ChatServiceClient} from './proto/chatbot_grpc_web_pb'

const srv = new ChatServiceClient("http://localhost:8099")

function App() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();


  useEffect(() => {

    const listReq = new ChatRequest()

        const call = srv.chatFunc(listReq, {})
        call.on('data', (received) => {
            console.log("received", received);
        } )
        call.on('end', (received) => console.log("end", received) )
        call.on('status', (received) => console.log("status", received) )
        call.on('error', (received) => console.log("error", received) )

  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }
  return (
    <div className="App">
      blue
    </div>
  );
}

export default App;
