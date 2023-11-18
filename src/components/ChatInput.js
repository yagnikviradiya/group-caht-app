import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/chat/chatSlice';
import { TextField, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.chat.selectedGroup);
  const userName = useSelector((state) => state.chat.userName);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(sendMessage({ type: 'sendMessage', group: selectedGroup, userName, message }));
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%', padding: '10px' }}>
      <TextField
        label="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        fullWidth
        variant="outlined"
      />
      <IconButton size="large" color="primary" onClick={handleSendMessage}>
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

export default ChatInput;
