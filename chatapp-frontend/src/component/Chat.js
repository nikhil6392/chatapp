import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './Chat.css'



const Chat = () => {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar 
                    src={`https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`} 
                    alt="avatar"
                    />
                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>last seen at ...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='chat_body'>
                <p className='chat_message'>
                    <span className='chat_name'>Nikhil</span>
                    this is a message
                    <span className='chat_timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat_message chat_receiver'>
                    <span className='chat_name'>Parag</span>
                    this is a message back
                    <span className='chat_timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Nikhil</span>
                    This is a message again again
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className='chat_footer'></div>

        </div>
    )
}

export default Chat
