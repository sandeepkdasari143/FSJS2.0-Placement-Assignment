import React from 'react'
import { Link } from 'react-router-dom';
import html from "./assets/html-5.png"
import css from './assets/css-3.png'
import js from './assets/js.png'
import react from './assets/atom.png'
import express from './assets/express.png'
import home from './assets/house.png'
const Sidebar = () => {
    return (
        <div className='min-h-[92vh] flex justify-center basis-[15%] border-r border-[rgb(39,41,58)]'>
            <nav className='flex flex-col gap-3 m-3 basis-[90%]'>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] focus:bg-[rgb(39,41,58)]" to="/"><h1 className='flex items-center gap-2'><span><img src={home} alt="Home Logo" /></span>Home</h1></Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] focus:bg-[rgb(39,41,58)]" to="/html5"><h1 className='flex items-center gap-2'><span><img src={html} alt="HTML5 Logo" /></span>HTML5</h1></Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] focus:bg-[rgb(39,41,58)]" to="/css3"><h1 className='flex items-center gap-2'><span><img src={css} alt="CSS3 Logo" /></span>CSS3</h1></Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] focus:bg-[rgb(39,41,58)]" to="/javascript"><h1 className='flex items-center gap-2'><span><img src={js} alt="JS Logo" /></span>JavaScript</h1></Link>
                <Link className="group flex flex-col gap-1 px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] focus:bg-[rgb(39,41,58)]" to="/reactjs">
                    <h1 className='flex items-center gap-2'><span><img src={react} alt="React Logo" /></span>ReactJS</h1>
                    <nav className='flex flex-col'>
                        <Link className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/calculator">Calculator App</Link>
                        <Link className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/todo">ToDo App</Link>
                        <Link className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/ticTacToe">Tic-Tac-Toe</Link>
                        <Link className="px-3 py-2 text-[12px] rounded-md focus:bg-[rgb(39,41,58)]" to="/reactjs/taskManager">Task Manager</Link>
                    </nav>
                </Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)] focus:bg-[rgb(39,41,58)]" to="/expressjs"><h1 className='flex items-center gap-2'><span><img src={express} alt="ExpressJS Logo" /></span>ExpressJS</h1></Link>
            </nav>
        </div>
    );
}

export default Sidebar