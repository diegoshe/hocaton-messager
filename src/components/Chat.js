import React from 'react';


function Chat(props) {
  return (
    <div className="message" onClick={() => props.getMessages(props.c.interlocutor.id)}>
      <figure className="avatar"><img src={props.c.interlocutor.photo.small} /></figure>
      <span className="message-text" onClick={props.getMessages}>{props.c.interlocutor.name}</span>
      <div className="timestamp">{props.c.interlocutor.visitDate}</div>
    </div>
  );
}

export default Chat;
