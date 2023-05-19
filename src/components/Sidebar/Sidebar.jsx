import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='min-h-[92vh] flex justify-center basis-[12%] border-r border-[rgb(39,41,58)]'>
            <nav className='flex flex-col gap-3 m-3 basis-[90%]'>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]" to="/">Home</Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]" to="/html5">HTML5</Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]" to="/css3">CSS3</Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]" to="/javascript">JavaScript</Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]" to="/reactjs">ReactJS</Link>
                <Link className="px-3 py-2 text-[14px] font-semibold rounded-md border border-[rgb(39,41,58)]" to="/expressjs">ExpressJS</Link>
            </nav>
        </div>
    );
}

export default Sidebar