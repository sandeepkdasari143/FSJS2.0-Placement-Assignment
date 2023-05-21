import React from 'react';
import { NavLink} from 'react-router-dom';

import html from "./assets/html-5.png";
import css from './assets/css-3.png';
import js from './assets/js.png';
import react from './assets/atom.png';
import express from './assets/express.png';
import home from './assets/house.png';

const Sidebar = () => {
    return (
        <div className='min-h-[92vh] flex justify-center basis-[15%] border-r border-[rgb(39,41,58)] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]'>
            <nav className='flex flex-col gap-3 m-3 basis-[90%] dark:text-[rgb(242,242,248)] text-[rgb(96,106,123)]'>
                <NavLink className={({})=>styles.NavLink} to="/"><h1 className='flex items-center gap-2'><span><img src={home} alt="Home Logo" /></span>Home</h1></NavLink>
                <NavLink className={styles.NavLink} to="/html5"><h1 className='flex items-center gap-2'><span><img src={html} alt="HTML5 Logo" /></span>HTML5</h1></NavLink>
                <NavLink className={styles.NavLink} to="/css3"><h1 className='flex items-center gap-2'><span><img src={css} alt="CSS3 Logo" /></span>CSS3</h1></NavLink>
                <NavLink className={styles.NavLink} to="/javascript"><h1 className='flex items-center gap-2'><span><img src={js} alt="JS Logo" /></span>JavaScript</h1></NavLink>
                <NavLink className={`group flex flex-col gap-1 `+`${styles.NavLink}`} to="/reactjs">
                    <h1 className='flex items-center gap-2'><span><img src={react} alt="React Logo" /></span>ReactJS</h1>
                    <nav className='flex flex-col'>
                        <NavLink className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/calculator">Calculator App</NavLink>
                        <NavLink className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/todo">ToDo App</NavLink>
                        <NavLink className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/ticTacToe">Tic-Tac-Toe</NavLink>
                        <NavLink className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/taskManager">Task Manager</NavLink>
                    </nav>
                </NavLink>
                <NavLink className={styles.NavLink} to="/expressjs"><h1 className='flex items-center gap-2'><span><img src={express} alt="ExpressJS Logo" /></span>ExpressJS</h1></NavLink>
            </nav>
        </div>
    );
}

const styles = {
    NavLink: "px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]",
    ActiveNavLink:"px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] dark:bg-[rgb(39,41,58)] bg-[rgb(242,242,248)]"
}

export default Sidebar