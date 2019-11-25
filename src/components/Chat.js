import React from 'react';
import MessageOpponent from "./MessageOpponent";
import MessagePersonal from "./MessagePersonal";

function Chat(props) {
  console.log(props)
  console.log("chat")
  return (
    <>
    {
      props.c > 0 ?
        <MessageOpponent/>
        :
        <MessagePersonal c={props.c}/>
}
</>
);
}

export default Chat;
