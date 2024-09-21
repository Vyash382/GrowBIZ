import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, InputAdornment, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Search as SearchIcon, AccountCircle, Menu as MenuIcon } from '@mui/icons-material';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [user, setUser] = useState(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenu = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        width: '100%',
        top: 0,
        margin: 0,
        backgroundColor: 'white', // Change background color to white
        boxShadow: 'none', // Optional: remove box shadow for a flat appearance
        zIndex: theme.zIndex.appBar
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img
            src="https://th.bing.com/th/id/OIP.nxhMRGsXc2RDLY5ro9zHwwHaF7?w=220&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
            alt="Logo"
            style={{ height: 80 }}
          />
        </Typography>
        {!isMobile ? (
          <>
            <TextField
              variant="outlined"
              placeholder="What are you searching for"
              size="medium"
              sx={{ marginRight: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button color="primary" sx={{ marginRight: 2 }}>Explore Other Businesses for sale</Button>
            <Button color="primary" sx={{ marginRight: 2 }}>Explore skilled workers</Button>
            <Button color="primary" sx={{ marginRight: 2 }}>Notifications</Button>
            <Button color="primary" sx={{ marginRight: 2 }}>Add a new Business</Button>
            {user ? (
              <>
                <IconButton edge="end" color="primary" onClick={handleMenu}>
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My Account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="primary" sx={{ marginRight: 2 }}>Login</Button>
            )}
          </>
        ) : (
          <>
            <TextField
              variant="outlined"
              placeholder="What are you searching for"
              size="small"
              sx={{ marginRight: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton edge="start" color="primary" aria-label="menu" onClick={handleMobileMenu}>
              <MenuIcon />
            </IconButton>
            
            <Menu
              anchorEl={mobileMenuAnchorEl}
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Services</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
              {user ? (
                <>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My Account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleClose}>Login</MenuItem>
              )}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
