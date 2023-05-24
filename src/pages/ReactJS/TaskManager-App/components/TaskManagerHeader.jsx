import React from 'react'
import GitHubButton from '../../../../components/GitHubButton'

const TaskManagerHeader = () => {
    return (
        <header className='flex flex-col items-center gap-3'>
            <h1 className='font-extrabold text-3xl text-[rgb(240,46,101)]'>Task Manager App</h1>
            <GitHubButton to="https://github.com/sandeepkdasari143/FSJS2.0-Placement-Assignment/tree/master/src/pages/ReactJS/TaskManager-App"/>
        </header>
    )
}

export default TaskManagerHeader