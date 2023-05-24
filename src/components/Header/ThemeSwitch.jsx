import React from 'react'
import themeContext from '../../contextAPI/ThemeContext'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FlareIcon from '@mui/icons-material/Flare';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
const ThemeSwitch = () => {
    const {theme, setTheme} = React.useContext(themeContext);
    return (
        <>
            <button title={theme==="light"?"Switch To Dark Mode":"Switch To Light Mode"} onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
                {
                    theme === "light"? 
                    <p><NightsStayIcon className='text-[rgb(240,46,101)]'/></p> : 
                    <p><WbIncandescentIcon className='dark:text-yellow-300 text-[rgb(240,46,101)]'/></p>
                }
            </button>
        </>
    )
}

export default ThemeSwitch