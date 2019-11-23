import openSocket from 'socket.io-client';
import {useState, useEffect} from 'react'
import {useSocketChats} from "./useSocketChats";
import {useSocketMessages} from "./useSocketMessages";
import {useSocketInitChat} from "./useSocketInitChat";
import {useSocketSendMessage} from "./useSocketSendMessage";


export const useSocketIoClient = (token, data) => {
  const [socket, setSocket] = useState({on(){}, fake: true});
  const [socketState, setSocketState] = useState();

  const getChats = useSocketChats(socket, token, socketState, setSocketState);
  const getMessages = useSocketMessages(socket, token, socketState, setSocketState, data);
  const initChat = useSocketInitChat(socket, token, socketState, setSocketState, data);
  const sendMessage = useSocketSendMessage(socket, token, socketState, setSocketState, data);

  useEffect(() => {
    setSocket(openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + token}));
    console.log('token: ' + token + ' on...');
  }, [token]);

  return [socketState, getChats, getMessages, initChat, sendMessage]
};
