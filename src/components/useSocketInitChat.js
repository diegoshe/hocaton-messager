import {useCallback, useEffect} from 'react'

export const useSocketInitChat = (socket, token, socketState, setSocketState, data) => {
  !socket.fake && console.log('init-chat-success...');

  useEffect(() => {
    socket.on('init-chat-success', response => {
      console.warn('!!! NEKO socket messages !!! init-chat: ', response);
      setSocketState({...socketState, initChat: response})
    })
  }, [socket, setSocketState]);

  const initChat = useCallback(() => {
    console.log('init-chat...');
    console.log(data);
    socket.emit('init-chat', {token, interlocutorId: data.interlocutorId});
  }, [token, socket, data.interlocutorId]);
  return initChat
};