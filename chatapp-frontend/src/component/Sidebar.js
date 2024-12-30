import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import profile from './assets/profile.jpg'
import SidebarChat from './SidebarChat';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar src ={profile} />
            <div className='sidebar_headerRight'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                <SearchOutlinedIcon />
                <input placeholder='Search bar'  type= "text" />
            </div>
        </div>
        <div className='sidebar_chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar
