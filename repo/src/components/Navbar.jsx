import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-[100px] bg-white absolute top-0 flex justify-between">
    <div  className="p-10 text-gray-900 text-xl">Logo</div>
    <div  className="p-10 text-gray-900 text-xl">Profile</div>
    </div>
  )
}

export default Navbar
