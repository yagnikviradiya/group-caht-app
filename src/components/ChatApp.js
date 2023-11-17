import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSocket } from '../redux/chat/chatSlice';
import { Container, Grid } from '@mui/material';
import GroupSelection from './GroupSelection';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatApp = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.chat.socket);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5000');
    dispatch(setSocket(newSocket));

    return () => {
      newSocket.close();
    };
  }, [dispatch]);

  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <GroupSelection socket={socket} />
          </Grid>
          <Grid item xs={12} md={8}>
            <ChatMessages />
            <ChatInput socket={socket} />
          </Grid>
        </Grid>
      </Container>
  );
};

export default ChatApp;
