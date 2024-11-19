import React from 'react'
import Login from './pages/Login';
import Home from './pages/Home';
import Testimonials from "./pages/Home";
import Team from "./pages/Team";
import MenuPage from './pages/MenuPage';
import Navbar from './components/Navbar';


import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

const [auth, setAuth]=useState(false);
function signIn(){
  setAuth(true);
}
if(auth){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/test" element={<Testimonials/>}/>
      </Routes>
    </Router>
  )
}
return (
  <div>
  <Login  signIn={signIn}/>
  </div>
)
}
export default App;


