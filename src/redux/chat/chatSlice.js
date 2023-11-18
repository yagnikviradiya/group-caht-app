// slice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        selectedGroup: '',
        userName: '',
        messages: [],
        socket: null,
    },
    reducers: {
        joinGroup: (state, action) => {
            state.selectedGroup = action.payload.group;
            state.userName = action.payload.userName;
            state.messages = action.payload.allMessages;
            state.socket.send(JSON.stringify({ type: 'joinGroup', group: action.payload.group, userName: action.payload.userName }));
        },

        setSingleMessage: (state, action) => {
            state.messages.push(action.payload);
        },

        setMessages: (state, action) => {
            state.messages = action.payload.allMessages;
        },

        sendMessage: (state, action) => {
            state.socket.send(JSON.stringify({ type: 'sendMessage', group: action.payload.group, userName: action.payload?.userName, message: action.payload?.message }));
        },

        setSocket: (state, action) => {
            state.socket = action.payload;
        },
    },
});

export const { joinGroup, sendMessage, setSocket, setMessages, setSingleMessage } = chatSlice.actions;


export default chatSlice.reducer;
