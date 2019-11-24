import React from 'react';


function Message(props) {
  return (
    <div className="message" onClick={() => props.getMessages}>
      <figure className="avatar"><img src={props.c.interlocutor.photo.small} /></figure>
      <span className="message-text" onClick={props.getMessages}>{props.c.interlocutor.name}</span>
      <div className="timestamp">{props.c.interlocutor.visitDate}</div>
    </div>
  );
}

export default Message;
