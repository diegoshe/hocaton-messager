import React from 'react';
import MessageOpponent from "./MessageOpponent";
import MessagePersonal from "./MessagePersonal";

function Chat(props) {
  console.log("chat")
  return (
    <>


        <MessageOpponent c={props.c}/>

        <MessagePersonal c={props.c}/>

</>
);
}

export default Chat;
