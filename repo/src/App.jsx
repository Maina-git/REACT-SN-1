import React from 'react'
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';

function App() {

const [auth, setAuth]=useState(false);


function signIn(){
  setAuth(true);
}
if(auth){
  return (
    <div>
<Home/>
    </div>
  )
}
return (
  <div>
  <Login  signIn={signIn} />
  </div>
)
}
export default App;




