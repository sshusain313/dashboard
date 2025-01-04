import React, {useState,useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider';
const CompleteTask = ({data}) => {

   const [userData, setUserData]=useContext(AuthContext);
  
      const [taskTitle, setTaskTitle]=useState('');
      const [taskDescription, setTaskDescription]=useState('');
      const [taskDate, setTaskDate]=useState('');
      const [assignTo, setAssignTo]=useState('');
      const [category, setCategory]=useState('');
      const [newTask, setNewTask]=useState({});
      
      const [completed, setCompleted]=useState();

  const sendTo=(e)=>{
    const data=userData;
    const complete={taskTitle, taskDate, taskDescription, category, active:false, newTask:true, failed:false, completed};
    data.complete={completed:false};
    //   data.tasks.push(completed);
  //   data.taskNumbers.complete.completed=e.taskNumbers.complete.completed+1
    console.log(data);
  }
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl">
       <div className='flex justify-between px-1 py-1 rounded text-sm'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xs'>{data.date}</h4>
       </div>
       <div className='flex flex-col'>
       <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
       <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between my-3'>
      <button className='bg-green-500 py-2 px-2 text-sm w-[75%] rounded' onClick={(e)=>{sendTo(e)}}>completed</button>
      {/* <button className='bg-red-500 py-2 px-2 text-sm rounded'>mark as failed</button> */}
      </div> 
      </div> 
    </div>    
  )
}

export default CompleteTask

