import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinGroup } from '../redux/chat/chatSlice';
import {
    Card,
    CardContent,
    TextField,
    Button,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    Typography,
    CardHeader,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GroupSelection = () => {
    const [selectedGroup, setSelectedGroup] = useState('IT');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const socket = useSelector((state) => state.chat.socket);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserName(e.target.value);
        if (e.target.value.trim() === '') {
            setError('Please enter a userName.');
        } else {
            setError('');
        }
    };

    const handleJoinGroup = () => {
        if (userName.trim() === '') {
            setError('Please enter a userName.');
            return;
        }

        localStorage.setItem('userName', userName);
        localStorage.setItem('groupName', selectedGroup);
        
        dispatch(joinGroup({ type: 'joinGroup', group: selectedGroup, userName}));
        navigate("/chat");
    };

    return (
        <Card>
            <CardContent>
                <CardHeader title="Chat App" />
                <Box mb={2}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Join a group and start chatting!
                    </Typography>
                </Box>
                <TextField
                    label="Enter your name"
                    value={userName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={!!error}
                    helperText={error}
                    sx={{ mb: "20px" }}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Select a group</InputLabel>
                    <Select
                        sx={{ mb: "20px" }}
                        label="Select a group"
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                    >
                        <MenuItem value="IT">IT</MenuItem>
                        <MenuItem value="Sales">Sales</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="contained" color="primary" onClick={handleJoinGroup} fullWidth>
                    Join Group
                </Button>
            </CardContent>
        </Card>
    );
};

export default GroupSelection;
