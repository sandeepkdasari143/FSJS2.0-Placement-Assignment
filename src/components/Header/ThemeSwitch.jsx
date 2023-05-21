import React from 'react'
import themeContext from '../../contextAPI/ThemeContext'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitch = () => {
    const [theme, setTheme] = React.useContext(themeContext)
    return (
        <div>
            <button
                className='transition-all duration-[1000ms] linear'
                onClick={
                    setTheme(theme === "dark" ? "light" : "dark")
                }
            >
                {theme === "dark" ? <LightModeIcon className='text-[rgb(240,46,101)]' /> : <NightsStayIcon className='text-[rgb(39,41,58)]' />}
            </button>
        </div>
    )
}

export default ThemeSwitch