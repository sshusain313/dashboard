import React, { useState } from 'react'
// import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {

  const logOut=()=>{
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  }
  return (
    <div className='flex items-end justify-between'>
    <h1 className='2xl font-medium'>Hello<br /><span className='text-3xl'>{props.username}</span></h1>
    <button className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm' onClick={logOut} >Log out</button>
    </div>
  )
}

export default Header
