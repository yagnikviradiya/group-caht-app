import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    selectedGroup: '',
    username: '',
    messages: [],
    socket: null,
  },
  reducers: {
    joinGroup: (state, action) => {
      state.selectedGroup = action.payload.group;
      state.username = action.payload.username;
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { joinGroup, sendMessage, setSocket } = chatSlice.actions;

export default chatSlice.reducer;
