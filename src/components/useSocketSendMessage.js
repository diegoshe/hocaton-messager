import {useEffect} from 'react'

export const useSocketSendMessage = (socket, token, socketState, setSocketState, data) => {
  !socket.fake && console.log('send-message-success...');

  useEffect(() => {
    socket.on('send-message-success', response => {
      console.warn('!!! NEKO socket messages !!! send-message: ', response);
      setSocketState({...socketState, sendMessage: response})
    })
  }, [socket, setSocketState]);

  const sendMessage = () => {
    console.log('send-message...');
    console.log(data);

    socket.emit('send-message', {token, interlocutorId: data.interlocutorId, body: data.message});
  };
  return sendMessage
};