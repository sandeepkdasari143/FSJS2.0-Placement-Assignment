// import React from 'react'

const TaskForm = ({ addTask, handleTaskInputsChange, taskTitle, taskDescription}) => {
    return (
        <form onSubmit={addTask} className="w-[60%] flex flex-col gap-7">
        <label
            htmlFor="newTodo"
            className="font-bold text-3xl text-center text-[rgb(240,46,101)] cursor-pointer"
        >
            ToDo App
        </label>
        <div className="flex flex-col gap-7">
            <input
            name="taskTitle"
            onChange={handleTaskInputsChange}
            value={taskTitle}
            id="newTaskTitle"
            className="dark:text-white text-black font-semibold bg-white dark:bg-transparent dark:focus:bg-[rgba(22,22,34,0.6)] appearance-none w-full px-3 py-2 border-2 dark:border-gray-600 border-pink-700 dark:focus:border-pink-700 rounded-md shadow-sm placeholder-gray-300 focus:outline-none focus:border-pink-800 text-md"
            placeholder="Enter Your Task Title..."
            type="text"
            />
                
            <input
            name="taskDescription"
            onChange={handleTaskInputsChange}
            value={taskDescription}
            id="newTaskDescription"
            className="dark:text-white text-black font-semibold bg-white dark:bg-transparent dark:focus:bg-[rgba(22,22,34,0.6)] appearance-none w-full px-3 py-2 border-2 dark:border-gray-600 border-pink-700 dark:focus:border-pink-700 rounded-md shadow-sm placeholder-gray-300 focus:outline-none focus:border-pink-800 text-md"
            placeholder="Enter Your Task Description..."
            type="text"
            />

            <button
            className="font-semibold rounded-md text-md w-[100px] bg-[rgb(240,46,101)] text-white"
            type="submit"
            >
            Add ToDo
            </button>
        </div>
        </form>
    );
};

export default TaskForm;
