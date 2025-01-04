import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData]=useContext(AuthContext);

    const [taskTitle, setTaskTitle]=useState('');
    const [taskDescription, setTaskDescription]=useState('');
    const [taskDate, setTaskDate]=useState('');
    const [assignTo, setAssignTo]=useState('');
    const [category, setCategory]=useState('');

    const [newTask, setNewTask]=useState({});

    const submitHandler=(e)=>{
     e.preventDefault();
    
    const newTask={taskTitle, taskDate, taskDescription, category, active:false, newTask:true, failed:false, completed:false};
    const data=userData;
    data.forEach(function(elem){
        if(assignTo==elem.firstname){
            elem.tasks.push(newTask);
            elem.taskNumbers.newTask=elem.taskNumbers.newTask+1
        }
    })
    setUserData(data);
    console.log(data);
    
    setTaskDate('');
    setTaskDescription('');
    setAssignTo('');
    setTaskDate('');
    setCategory('');
    }

  return (
    <div>
    <form onSubmit={(e)=>{
        submitHandler(e)
    }} className='flex flex-wrap w-full item-start justify-between'>
      <div className='w-1/2'>
       <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input type='text' value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' />
       </div>
       <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input type='date' value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' />
       </div>
       <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        <input type='text' value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' />
       </div>
       <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' />
       </div>
      </div>
      <div className='w-2/5 flex flex-col items-start'>
      <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
      <textarea type='text' value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} className='w-full h-44 text-sm px-4 rounded outline-none bg-transparent border-[1px]'></textarea>
      <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </div>
    </form>
</div>
  )
}

export default CreateTask
