import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl">
       <div className='flex justify-between px-1 py-1 rounded text-sm'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xs'>{data.taskDate}</h4>
       </div>
       <div className='flex flex-col'>
       <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
       <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between my-3'>
      <button className='bg-green-500 py-2 px-2 text-sm rounded'>mark as completed</button>
      <button className='bg-red-500 py-2 px-2 text-sm rounded'>mark as failed</button>
      </div> 
      </div> 
    </div>
  )
}

export default AcceptTask
