import { useEffect, useState } from 'react'
import './App.css'
import './style.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import NewDrop from './pages/NewDrop'
import Men from './pages/Men'
import Women from './pages/Women'
import Login from './pages/Login'
import UserDetails from './pages/UserDetails'
import Signup from './pages/Signup'

function App() {
  // Initialize state variables with values from local storage or default values
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true' || false
  );
  const [isSignUp, setIsSignUp] = useState(
    localStorage.getItem('isSignUp') === 'true' || false
  );

  // useEffect to update local storage whenever isLoggedIn or isSignUp changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('isSignUp', isSignUp);
  }, [isSignUp]);

  // Initialize state variable with values from local storage or default values
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : { profile: "", name: "", email: "", password: "" };
  });

  // useEffect to save formData to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isSignUp={isSignUp} setIsSignUp={setIsSignUp} formData={formData} setFormData={setFormData}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newdrop" element={<NewDrop />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formData={formData} setFormData={setFormData} />} />
        <Route path="/signup" element={<Signup isSignUp={isSignUp} setIsSignUp={setIsSignUp} formData={formData} setFormData={setFormData} />} />
        <Route path="/userdetails" element={<UserDetails formData={formData} setFormData={setFormData} />} />
      </Routes>
    </div>
  )
}

export default App
