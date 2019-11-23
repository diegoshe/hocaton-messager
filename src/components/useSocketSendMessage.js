import {useCallback, useEffect} from 'react'

export const useSocketSendMessage = (socket, token, socketState, setSocketState, data) => {
  !socket.fake && console.log('send-message-success...');

  useEffect(() => {
    socket.on('send-message-success', response => {
      console.warn('!!! NEKO socket messages !!! message: ', response);
      setSocketState({...socketState, sendMessage: response})
    })
  }, [socket, setSocketState]);

  const sendMessage = useCallback(() => {
    console.log('send-message...');
    console.log(data);

    socket.emit('send-message', {token, interlocutorId: data.interlocutorId, body: data.message});
  }, [token, socket, data.interlocutorId]);
  return sendMessage
};