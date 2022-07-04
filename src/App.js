import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Messages from './pages/Messages'
import Analytics from './pages/Analytics'
import FileManager from './pages/FileManager'
import Order from './pages/Order'
import Saved from './pages/Saved'
import Setting from './pages/Setting'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
