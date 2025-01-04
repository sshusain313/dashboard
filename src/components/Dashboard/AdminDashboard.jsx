import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
const AdminDashboard = (props) => {
  return (
    <div className='h-screen bg-[#1c1c1c] mt-7 rounded'>
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard
