import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  
  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e)=>{submitHandler(e)}}
         className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='border-2 border-emerald-600 py-3 px-5 outline-none bg-transparent text-xl rounded-full placeholder:text-gray-400 ' type='email' placeholder='Enter your Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='border-2 border-emerald-600 py-3 px-5 outline-none mt-3 bg-transparent text-xl rounded-full placeholder:text-gray-400 ' type='password' placeholder='Enter your Password' />
          <button className='text-white mt-5 border-none bg-emerald-600 py-3 px-5 outline-none text-xl rounded-full placeholder:text-white '>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
