import React from 'react';


function Message(props) {
  console.log(props.c)
  return (
    <div className="message" onClick={() => props.getMessages}>
      <figure className="avatar"><img src={"props.c && props.c.interlocutor.photos.small"} /></figure>
      <span className="message-text" onClick={props.getMessages}>{"props.c && props.c.interlocutor.name"}</span>
      <div className="timestamp">{"props.c && props.c.interlocutor.visitDate"}</div>
    </div>
  );
}

export default Message;
