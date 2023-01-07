import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { Profilelist } from './Profilelist';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { UserDetails } from './UserDetails';
import {Editprof } from './Editprofile'

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <AppBar position="static" style={{backgroundColor:"#DC0000",alignItems:"center"}}>
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/Profilelist")}>
            profile
          </Button>
          
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profilelist" element={<Profilelist />} />
        <Route path="/profile/:profileid" element={<UserDetails />} />
        <Route path="/profile/edit/:profileid" element={<Editprof />} />
      </Routes>
      
    </div>
  );
}

export default App;
