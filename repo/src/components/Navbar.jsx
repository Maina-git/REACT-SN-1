import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full h-[100px] bg-white absolute top-0 flex justify-between">
    <div  className="p-10 text-gray-900 text-xl">Logo</div>

<div className="p-10 flex gap-10">
<Link to="/home">Home</Link>
<Link to="/menu">ManuPage</Link>
<Link to="/team">Team</Link>
<Link to="/test">Testimonials</Link>
</div>
  <div  className="p-10 text-gray-900 text-xl">Profile</div>
  </div>
  )
}
export default Navbar
