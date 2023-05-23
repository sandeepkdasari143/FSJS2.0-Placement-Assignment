import React from 'react'
import DynamicFormTwoToneIcon from '@mui/icons-material/DynamicFormTwoTone';
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import themeContext from '../../contextAPI/ThemeContext';

const Header = () => {
    const {theme, setTheme} = React.useContext(themeContext);
    React.useEffect(()=>setTheme('light'),[])
    return (
        <header className='flex items-center justify-between h-[8vh] px-3 border-b border-pink-300 dark:border-[rgb(39,41,58)]'>
            <Link to="/" className='flex items-center gap-1 cursor-pointer text-[rgb(240,46,101)]'>
                <DynamicFormTwoToneIcon />
                <h1 className='font-md text-2xl'>iNeuron <span className='font-bold'>FSJS2.0</span></h1>
            </Link>
            <ThemeSwitch theme={theme} setTheme={setTheme}/>
            {/* <Link to='/reactjs'>React</Link> */}
        </header>
    )
}

export default Header