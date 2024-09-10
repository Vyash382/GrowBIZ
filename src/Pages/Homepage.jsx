import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import NewsHeadlines from './NewsHeadlines';
import { Chat } from '@mui/icons-material';
import { IconButton, Paper, TextField, Button } from '@mui/material';
import ChatList from '../Components/ChatList';
import ChatBox from '../Components/ChatBox';

const Homepage = () => {
  const [showChat, setShowChat] = useState(false);
  const [showChatBox,setShowChatBox] = useState(false);
  const [chatId,setChatId] = useState();
  const [chatName,setChatName] = useState();
  const [picture,setPicture] = useState('');
  const toggleChatBox = () => {
    if(showChatBox) {
      setShowChatBox(false);
    }
    else if((!showChatBox) && (!showChat)){
      setShowChat(true);
    }
    else if(showChat){
      setShowChat(false);
    }
  };

  return (
    <div>
      <div style={{ position: 'fixed', bottom: '26px', right: '26px', zIndex: '1000' }}>
        <IconButton color="primary" onClick={toggleChatBox}>
          <Chat style={{ fontSize: 40 }} />
        </IconButton>
      </div>
      
      <Navbar />
      <h1>TOP BUSINESS HEADLINES TODAY!</h1>
      <NewsHeadlines />
      {showChat && (<ChatList setShowChatBox={setShowChatBox} setChatId={setChatId} setChatName={setChatName} setShowChat={setShowChat} setPicture={setPicture} />)}
      {showChatBox && (<ChatBox name={chatName} id={chatId} profile_pic={picture} setShowChat={setShowChat} setShowChatBox={setShowChatBox} />)}
    </div>
  );
};

export default Homepage;
