// import React, { useEffect, useState } from 'react'
// import Avatar from '@mui/material/Avatar';
// import './SidebarChat.css'


// const SidebarChat = ({contactName}) => {
//     const [seed, setSeed] = useState("")

//     useEffect(() => {
//         setSeed(Math.floor(Math.random() * 5000))
//     } , [])
//   return (
//     <div className='sidebarChat'>
//         <Avatar src = {`https://api.dicebear.com/9.x/notionists/svg?${seed}`} />
//         <div className='sidebarChat_info'>
//             <h2>{contactName}</h2>
//             <p>Last message...</p>
//         </div>

      
//     </div>
//   )
// }

// export default SidebarChat

import React from 'react';
import Avatar from '@mui/material/Avatar';
import './SidebarChat.css';

const SidebarChat = ({ contactName, seed }) => {
    return (
        <div className="sidebarChat">
            <Avatar 
                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`} 
                alt="avatar"
            >
                {contactName[0]}
            </Avatar>
            <div className="sidebarChat_info">
                <h2>{contactName}</h2>
                <p>Last message...</p>
            </div>
        </div>
    );
};

export default SidebarChat;
