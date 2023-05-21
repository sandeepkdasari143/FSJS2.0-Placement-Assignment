// import React from 'react'
import ToDoApp from './ToDoApp'

const ToDo = () => {
  return (
    <main className='relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]'>
      <section className='w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[30%] flex items-center justify-center'>
        {/* TODO Input */}
        <form className='w-[60%] flex flex-col gap-7'>
          <label htmlFor="todo" className='font-bold text-3xl text-center text-[rgb(240,46,101)] cursor-pointer'>ToDo App</label>
          <div className='flex'>
            <input 
            id="todo"
            className='dark:text-white text-black font-semibold bg-white dark:bg-transparent dark:focus:bg-[rgba(22,22,34,0.6)] appearance-none w-full px-3 py-2 border border-2 dark:border-gray-600 border-pink-700 dark:focus:border-pink-700 rounded-tl-md rounded-bl-md shadow-sm placeholder-gray-300 focus:outline-none focus:border-pink-800 text-md'
            placeholder='Enter Your ToDo Task...'
            type="text" />
            <button 
              className='font-semibold text-md w-[100px] bg-[rgb(240,46,101)] text-white'
              type='submit'>
              Add ToDo
            </button>
          </div>
        </form>
      </section>

      <section className='w-[100%] h-[70%]'>
        {/* TODO Listing */}
      </section>
    </main>
  )
}

export default ToDo