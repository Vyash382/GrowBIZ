import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography, Paper, Avatar } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChatBox = ({ name, id, profile_pic , setShowChat , setShowChatBox  }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBlock = () => {
    console.log('Block option clicked');
    handleClose();
  };

  const handleDelete = () => {
    console.log('Delete option clicked');
    handleClose();
  };

  const handleBack = () => {
    setShowChat(true);
    setShowChatBox(false);
  };

  return (
    <Paper
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '26px',
        width: '350px',
        maxHeight: '400px', // Set a maximum height for the container
        padding: '16px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        zIndex: '1000',
        overflowY: 'auto', // Enable vertical scrolling
        maxWidth: '600px',
        margin: '20px auto',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid #ccc',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
          <Avatar
            alt={name}
            src={profile_pic} 
            style={{ marginLeft: '8px', marginRight: '8px' }}
          />
          <Typography variant="h7">{name}</Typography>
        </div>
        <div>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleBlock}>Block</MenuItem>
            <MenuItem onClick={handleDelete}>Delete Chat</MenuItem>
          </Menu>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit magni, quisquam alias impedit consequuntur voluptate dicta commodi molestias neque aperiam harum, debitis magnam non id? Optio dolores esse ea.
      </div>
    </Paper>
  );
}

export default ChatBox;
