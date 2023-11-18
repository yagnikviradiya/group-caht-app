import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, List, ListItem, Avatar, Typography, Box } from '@mui/material';
import { Group as GroupIcon } from '@mui/icons-material';

const ChatMessages = () => {
    const messages = useSelector((state) => state.chat.messages);
    const userName = useSelector((state) => state.chat.userName);
    const profileName = useSelector((state) => state.chat.profileName);

    return (
        <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px', height: '300px', overflowY: 'auto', minHeight:'250px' }}>
            <List>
                {messages?.map((msg, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            textAlign: msg.sender === 'system' ? 'center' : msg.sender === userName ? 'right' : 'left',
                            marginBottom: '15px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: msg.sender === 'system' ? 'center' : 'flex-start',
                                width: '100%',
                            }}
                        >
                            {msg.sender !== 'system' && (
                                <Avatar style={{ marginLeft: '5px' }}>
                                    {msg.sender === 'system' ? <GroupIcon /> : profileName?.charAt(0).toUpperCase()}
                                </Avatar>
                            )}
                            <Box sx={{ marginLeft: '10px', width: '100%' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        backgroundColor: msg.sender === userName ? '#2196f3' : msg.sender === 'system' ? '#f5f5f5' : '#f0f0f0',
                                        padding: '10px',
                                        borderRadius:
                                            msg.sender === userName ? '0 10px 10px 10px' : msg.sender === 'system' ? '10px' : '10px 10px 10px 0',
                                        color: msg.sender === userName ? '#fff' : '#000',
                                        maxWidth: '100%',
                                    }}
                                >
                                    {msg.sender !== 'system' && (
                                        <Box sx={{ marginBottom: '5px', fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }}>
                                            {msg.sender === userName ? 'You' : msg.sender}
                                        </Box>
                                    )}
                                    {msg.message}
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default ChatMessages;
