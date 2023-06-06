import { createContext } from "react";

const themeContext = createContext({
    theme: "dark",
    setTheme: (themeText)=>{}
}); //"dark" is the initial value of the theme and 
//Call back the SetTheme function which sets the theme value whenever we switch the theme...

export default themeContext;