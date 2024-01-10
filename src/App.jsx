import { useState } from 'react'
import './App.css'
import './style.css'
import Home from './pages/Home'
import {Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar'
import NewDrop from './pages/NewDrop'
import Men from './pages/Men'
import Women from './pages/Women'
import Login from './pages/Login'
import UserDetails from './pages/UserDetails'
import Signup from './pages/Signup'

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newdrop" element={<NewDrop/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userdetails" element={<UserDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
