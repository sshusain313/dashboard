import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
       <div className='flex justify-between px-1 py-1 rounded text-sm m-4'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xs'>{data.taskDate}</h4>
       </div>
       <div className='flex flex-col justify-between m-4'>
        <h2 className='mt-1 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
        {data.taskDescription}
        </p>
        <div className='mt-4'>
        <button className='bg-green-500 py-2 px-2 text-sm rounded'>Accept Task</button>
        </div>
        </div>
    </div>
  )
}

export default NewTask
