import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import axios  from 'axios';


function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get("/messages/sync")
      .then(res => {
        setMessages(res.data); // Updating state with fetched data
      })
      .catch(err => {
        console.error("Error fetching messages:", err);  // Handling errors
      });
  }); 


  return (
    <div className="App">
      <div className = "app_body">
            <Sidebar />
            <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
