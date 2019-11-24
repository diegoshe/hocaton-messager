import React from 'react';

function MessageOpponent(props) {
  return (
    <div className="message">
      <figure className="avatar"><img src="{}" /></figure>
      <span className="message-text">{props.message.body}</span>
      <div className="timestamp">12:56</div>
    </div>
  );
}

export default MessageOpponent;
