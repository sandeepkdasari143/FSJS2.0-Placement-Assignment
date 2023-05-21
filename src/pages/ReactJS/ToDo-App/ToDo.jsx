// import React from 'react'
import ToDoApp from './ToDoApp'

const ToDo = () => {
  return (
    <div className='relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]'>
      <div className='w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[30%]'>
        {/* TODO Input */}
      </div>

      <div className='w-[100%] h-[70%]'>
        {/* TODO Listing */}
      </div>
    </div>
  )
}

export default ToDo