import React, { useState } from 'react';
import { Paper, TextField, Button,IconButton } from '@mui/material';
import ChatItem from './ChatItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ChatList = ({setShowChatBox,setChatId,setChatName,setShowChat,setPicture}) => {
    const [chats,setChats] = useState([
        {
            name: "Surbhi Singh",
            picture: "data:image/jpeg;base64,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",
            lastMessage: "Lets meet for the product building",
            online: true,
        },
        {
            name: "Alice Johnson",
            picture: "www.examplepic2.com",
            lastMessage: "Hey, how's it going?",
            online: false
        },
        {
            name: "Bob Smith",
            picture: "www.examplepic3.com",
            lastMessage: "Got your message!",
            online: true
        },
        {
            name: "Charlie Brown",
            picture: "www.examplepic4.com",
            lastMessage: "Let's catch up soon.",
            online: false
        },
        {
            name: "Diana Prince",
            picture: "www.examplepic5.com",
            lastMessage: "Can you send me the files?",
            online: true
        },
        {
            name: "Edward Norton",
            picture: "www.examplepic6.com",
            lastMessage: "Meeting at 3 PM?",
            online: true
        },
        {
            name: "Fiona Apple",
            picture: "www.examplepic7.com",
            lastMessage: "Let's grab lunch tomorrow.",
            online: false
        },
        {
            name: "George Michael",
            picture: "www.examplepic8.com",
            lastMessage: "The report is ready.",
            online: true
        },
        {
            name: "Hannah Montana",
            picture: "www.examplepic9.com",
            lastMessage: "I finished the project!",
            online: false
        },
        {
            name: "Irene Adler",
            picture: "www.examplepic10.com",
            lastMessage: "Can we reschedule our call?",
            online: true
        },
        {
            name: "Jack Sparrow",
            picture: "www.examplepic11.com",
            lastMessage: "Arrr! Ready for the adventure.",
            online: false
        },
        {
            name: "Katherine Hepburn",
            picture: "www.examplepic12.com",
            lastMessage: "The script is fantastic.",
            online: true
        },
        {
            name: "Leonardo DiCaprio",
            picture: "www.examplepic13.com",
            lastMessage: "Thanks for your help!",
            online: false
        },
        {
            name: "Meryl Streep",
            picture: "www.examplepic14.com",
            lastMessage: "See you at the gala.",
            online: true
        },
        {
            name: "Natalie Portman",
            picture: "www.examplepic15.com",
            lastMessage: "Let's finalize the details.",
            online: true
        },
        {
            name: "Oscar Isaac",
            picture: "www.examplepic16.com",
            lastMessage: "Great job on the presentation.",
            online: false
        },
        {
            name: "Penelope Cruz",
            picture: "www.examplepic17.com",
            lastMessage: "I'll be there at 7.",
            online: true
        },
        {
            name: "Quentin Tarantino",
            picture: "www.examplepic18.com",
            lastMessage: "We need to discuss the plot.",
            online: true
        },
        {
            name: "Rihanna",
            picture: "www.examplepic19.com",
            lastMessage: "Excited for the collaboration!",
            online: false
        },
        {
            name: "Samuel L. Jackson",
            picture: "www.examplepic20.com",
            lastMessage: "What’s the next step?",
            online: true
        },
        {
            name: "Tina Fey",
            picture: "www.examplepic21.com",
            lastMessage: "The sketches are amazing.",
            online: false
        }
    ]);
    const handleClick = (name,index,picture)=>{
        setShowChatBox(true);
        setChatId(index);
        setChatName(name);
        setShowChat(false);
        setPicture(picture);
        console.log('ss')
    }
    const handleBack = () => {
        setShowChat(false);
    };
    return (
        <div>
          <Paper
            style={{
              position: 'fixed',
              bottom: '80px',
              right: '26px',
              width: '300px',
              maxHeight: '400px', // Set a maximum height for the container
              padding: '16px',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
              zIndex: '1000',
              overflowY: 'auto', // Enable vertical scrolling
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center',     marginBottom: '16px' }}>
                <IconButton onClick={handleBack}>
                <ArrowBackIcon />
                </IconButton>
              <h3>Chat List</h3>
            </div>
            {chats.map((element, index) => (
              <ChatItem
                key={index}
                name={element.name}
                picture={element.picture}
                lastMessage={element.lastMessage}
                online={element.online}
                handleClick={handleClick}
              />

            ))}
          </Paper>
        </div>
    );
    
}

export default ChatList
