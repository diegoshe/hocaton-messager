import {useEffect} from 'react'

export const useSocketMessages = (socket, token, socketState, setSocketState, data) => {
  !socket.fake && console.log('get-messages-success...');

  useEffect(() => {
    socket.on('get-messages-success', response => {
      console.warn('!!! NEKO socket messages !!! message: ', response);
      setSocketState({...socketState, messages: response.messages})
    })
  }, [socket, setSocketState]);

  return () => {
    console.log('get-messages...');
    socket.emit('get-messages', {token, interlocutorId: data.interlocutorId});
  };
};