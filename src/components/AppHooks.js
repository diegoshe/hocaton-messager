import React from 'react';
import {useSocketIoClient} from "./useSocketIoClient";
import {useState} from 'react'
import App from "../App";

const AppHooks = () => {
  const [data, setData] = useState({interlocutorId: 0});

  const token = "73fae02b-f2f6-4ec5-8d42-ee3df6a8c5a8";
  const [socketState, getChats, getMessages, initChat, sendMessage] = useSocketIoClient(token, data);

  return (
    <div className="AppHooks">
      token: {token}
      {socketState && socketState.chats ? "work" : "no work"}
      {/*&& socketState.chats*/}
      {/*  .map((c, i) => <Chat key={i} c={c} getMessages={getMessages} setData={setData} data={data}/>)}*/}
      {/*{socketState && socketState.messages && socketState.messages.messages*/}
      {/*  .map((m, i) => <Message key={i} m={m} setData={setData} data={data}/>)}*/}


      {/*<button onClick={getChats}>get Chats...</button>*/}
      {/*<button onClick={getMessages}>get Messages</button>*/}
      <App getChats={getChats}
           sendMessage={sendMessage}
           setData={setData}
           initChat={initChat}
           getMessages={getMessages}
           socketState={socketState}
           data={data}
           getChats={getChats}/>
    </div>
  );
};

export default AppHooks;