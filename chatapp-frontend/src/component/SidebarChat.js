import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import './SidebarChat.css'


const SidebarChat = () => {
    const [seen, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    } , [])
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat_info'>
            <h2>Room name</h2>
            <p>Last message...</p>
        </div>

      
    </div>
  )
}

export default SidebarChat
