import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const GitHubButton = ({ to }) => {
    return (
        <Link target="blank" to={to}
            className="group flex items-center gap-3 px-5 py-2 bg-gray-700 outline-none border-none rounded-lg text-white">
            
            <span className='group-hover:text-pink-400 group-hover:underline'><GitHubIcon /></span>
            <span className='group-hover:text-pink-400 group-hover:underline'>Open Source Code</span>
            <span className="group-hover:flex hidden text-blue-400"><ArrowOutwardIcon /></span>
        </Link>
    )
}

export default GitHubButton