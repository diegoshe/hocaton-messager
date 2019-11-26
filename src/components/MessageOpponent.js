import React from 'react';

function MessageOpponent(props) {
  console.log(props)
  console.log("user-opponent")
  return (

        <div className="message">
          <figure className="avatar"><img src={"props.c.interlocutor.photo.small"}/></figure>
          <span className="message-text">{props.c.body}</span>
          <div className="timestamp">{props.c.date}</div>
        </div>

  );
}

export default MessageOpponent;
