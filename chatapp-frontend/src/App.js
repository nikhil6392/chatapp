import './App.css';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';

function App() {
  return (
    <div className="App">
      <div className = "app_body">
            <Sidebar />
            <Chat />
      </div>
    </div>
  );
}

export default App;
