import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RiMenuAddFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { SiTistory } from "react-icons/si";

function Navbar() {
  return (
    <div className="w-full h-[100px] bg-white absolute top-0 flex justify-between">
    <div  className="p-10 text-gray-900 text-xl">ELITE COMPANY</div>

<div className="p-10 flex gap-[150px]">
<Link to="/home" className="flex items-center justify-center text-xl">
<FaHome/>
</Link>
<Link to="/menu" className="flex items-center justify-center text-xl ">
<RiMenuAddFill/>
</Link>
<Link to="/team" className="flex items-center justify-center text-xl ">
<IoPeopleSharp/>
</Link>
<Link to="/test" className="flex items-center justify-center text-xl ">
<SiTistory/>
</Link>
</div>
  <div  className="p-10 text-gray-900 text-xl">
    <CgProfile/>
  </div>
  </div>
  )
}

export default Navbar
