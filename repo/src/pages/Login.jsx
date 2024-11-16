import React from 'react'

function Login({signIn}) {
  return (
    <div className="w-full h-screen flex content-center justify-center items-center">
      <button onClick={signIn} className="px-5 py-2 bg-gray-900 outlinr-none text-white font-bold rounded">LOG  ME  IN</button>
    </div>
  )
}

export default Login
