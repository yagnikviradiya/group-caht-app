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
} from '@mui/material';

const GroupSelection = ({ socket }) => {
    const [selectedGroup, setSelectedGroup] = useState('IT');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setUsername(e.target.value)
        if (e.target.value.trim() === '') {
            setError('Please enter a username.');
            return;
        } else {
            setError('');
        }
    }

    const handleJoinGroup = () => {
        if (username.trim() === '') {
            setError('Please enter a username.');
            return;
        }

        dispatch(joinGroup({ group: selectedGroup, username }));
        socket.send(JSON.stringify({ type: 'joinGroup', group: selectedGroup, username }));
    };

    return (
        <Card>
            <CardContent>
                <TextField
                    label="Enter your name"
                    value={username}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={error}
                    helperText={error}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Select a group</InputLabel>
                    <Select
                        label="Select a group"
                        value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
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
