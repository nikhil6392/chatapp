import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './Chat.css'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';



const Chat = ({ messages}) => {
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
                    <h3>Sample Chat Room</h3>
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
            {messages.map(message => (
                <p className={`chat__message ${message.received && 'chat__receiver'}`}>
                    <span className="chat__name">{message.name}</span>
                            {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>
         ))}
 </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form >
                    <input 
                        placeholder='Send a message'
                        type='text'>
                    </input>
                    <MicIcon />

                </form>
            </div>

        </div>
    )
}

export default Chat
