import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './Chat.css'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from 'axios';



const Chat = ({ messages}) => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: "thewebdev",
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }
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
                <p className={`chat_message ${message.received && 'chat_receiver'}`}>
                    <span className="chat_name">{message.name}</span>
                            {message.message}
                    <span className="chat_timestamp">
                        {message.timestamp}
                    </span>
                </p>
         ))}
 </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form >
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder='Type a Message'
                        type= 'text'>
                    </input>
                    <button onClick={sendMessage} type= "submit">Send a message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
