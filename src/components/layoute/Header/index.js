
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Chip } from '@mui/material';
import { useSelector } from 'react-redux';
import { Group as GroupIcon } from '@mui/icons-material';

const Header = () => {
  const chat = useSelector((state) => state.chat);
  const profileName = chat?.userName;
  const groupName = chat?.selectedGroup;
  const profileInitial = profileName ? profileName.charAt(0) : '';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chat App
        </Typography>
        {groupName && (
          <>
            <Chip
              avatar={<GroupIcon/>}
              label={groupName}
              sx={{ marginRight: '10px' }}
            />
          </>
        )}
        <Avatar sx={{ bgcolor: '#2196f3', marginRight: '10px' }}>
          {profileInitial?.toUpperCase()}
        </Avatar>
        <Typography variant="subtitle1">{profileName}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
