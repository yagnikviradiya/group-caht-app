// Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

const Header = () => {
  const profileName = "Yagnik"  
  const profileInitial = profileName ? profileName.charAt(0) : '';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Caht App
        </Typography>
        <Avatar sx={{ bgcolor: '#2196f3', marginRight: '10px' }}>
          {profileInitial}
        </Avatar>
        <Typography variant="subtitle1">
          
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
