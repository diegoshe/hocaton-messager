import React from 'react';


function UsersSearch(props) {
  console.log("users-search")
  return (
    <div className="message" onClick={() => props.initChats(props.c.id)}>
      <figure className="avatar"><img src={props.c.photos.small} /></figure>
      <span className="message-text" >{props.c.name}</span>
      <div className="timestamp">{props.c.id}</div>
    </div>
  );
}

export default UsersSearch;

