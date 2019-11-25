import React from 'react';


function MessagePersonal(props) {
  console.log("message-personal")
  return (
    <div className="message message-personal">
      <span className="message-text">{props.c.body}</span>
      <div className="timestamp">{props.c.date}</div>
    </div>
  );
}

export default MessagePersonal;
