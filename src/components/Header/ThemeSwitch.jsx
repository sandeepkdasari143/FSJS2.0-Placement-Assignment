import React from 'react'
import themeContext from '../../contextAPI/ThemeContext'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FlareIcon from '@mui/icons-material/Flare';
const ThemeSwitch = () => {
    const {theme, setTheme} = React.useContext(themeContext);
    return (
        <>
            <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
                {
                    theme === "light"? 
                    <p><NightsStayIcon className='text-[rgb(240,46,101)]'/></p> : 
                    <p><FlareIcon className='text-[rgb(240,46,101)]'/></p>
                }
            </button>
        </>
    )
}

export default ThemeSwitch