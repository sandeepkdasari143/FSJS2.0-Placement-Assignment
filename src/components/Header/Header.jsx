import React from 'react'
import DynamicFormTwoToneIcon from '@mui/icons-material/DynamicFormTwoTone';
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
    return (
        <header className='flex items-center justify-between h-[8vh] px-3 border-b border-[rgb(39,41,58)]'>
            <Link to="/" className='flex items-center gap-1 cursor-pointer text-[rgb(240,46,101)]'>
                <DynamicFormTwoToneIcon />
                <h1 className='font-thin text-2xl'>iNeuron <span className='font-bold'>FSJS2.0</span></h1>
            </Link>
            <div className='flex flex-row items-center justify-center gap-3'>
                <ThemeSwitch />
                <IconButton>
                    <GitHubIcon className='text-[rgb(197,199,216)]' />
                </IconButton>
            </div>
        </header>
    )
}

export default Header