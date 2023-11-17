// ChatMessages.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

const ChatMessages = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <Card>
      <CardContent>
        {messages.map((msg, index) => (
          <Typography key={index} variant="body1">
            <strong>{msg.sender}:</strong> {msg.message}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChatMessages;
