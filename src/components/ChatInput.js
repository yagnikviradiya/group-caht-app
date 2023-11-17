// ChatInput.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/chat/chatSlice';
import { TextField, Button } from '@mui/material';

const ChatInput = ({ socket }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.chat.selectedGroup);
  const username = useSelector((state) => state.chat.username);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(sendMessage({ group: selectedGroup, username, message }));
      socket.send(JSON.stringify({ type: 'sendMessage', group: selectedGroup, username, message }));
      setMessage('');
    }
  };

  return (
    <div>
      <TextField
        label="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage} fullWidth>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
