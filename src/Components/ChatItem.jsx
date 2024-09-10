import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Badge, Typography, IconButton } from '@mui/material';

const ChatItem = ({ name, picture, lastMessage, online, handleClick }) => {
  return (
    <ListItem alignItems="flex-start" style={{ borderBottom: '1px solid #ddd' }}>
      <ListItemAvatar>
        <IconButton onClick={() => handleClick(name,45,picture)} style={{ padding: 0 }}>
          <Badge
            color={online ? 'success' : 'default'}
            variant="dot"
            overlap="circular"
          >
            <Avatar alt={name} src={picture} />
          </Badge>
        </IconButton>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h6">{name}</Typography>}
        secondary={<Typography variant="body2" color="textSecondary">{lastMessage}</Typography>}
      />
    </ListItem>
  );
};

export default ChatItem;
