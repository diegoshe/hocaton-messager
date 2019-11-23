import React from 'react';


function Users(props) {
  return (
    <div className="message" onClick={() => props.initChats(props.c.id)}>
      <figure className="avatar"><img src={props.c.photos.small} /></figure>
      <span className="message-text" >{props.c.name}</span>
      <div className="timestamp">{props.c.id}</div>
    </div>
  );
}

export default Users;

