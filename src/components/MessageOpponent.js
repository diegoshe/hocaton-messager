import React from 'react';

function MessageOpponent(props) {
  console.log(props)
  console.log("user-opponent")
  return (
    // {
    //   props.c.chats.newMessagesCount > 0 ?
        <div className="message">
          <figure className="avatar"><img src={props.c.interlocutor.photo.small}/></figure>
          <span className="message-text">{props.c.lastMessage.body}</span>
          <div className="timestamp">{props.c.lastMessage.date}</div>
        </div>
        // :
        // <></>
    // }
  );
}

export default MessageOpponent;
