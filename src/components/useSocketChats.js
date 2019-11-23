import {useCallback, useEffect} from 'react'

export const useSocketChats = (socket, token, socketState, setSocketState) => {
  !socket.fake && console.log('get-chats-success...');

  useEffect(() => {
    socket.on('get-chats-success', response => {
      console.warn('!!! NEKO socket chats !!! message: ', response);
      setSocketState({...socketState, chats: response.chats})
    })
  }, [socket, setSocketState]);

  return useCallback(() => {
    console.log('get-chats...');
    socket.emit('get-chats', {token});
  }, [token, socket]);
};