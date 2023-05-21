import { createContext } from "react";

const themeContext = createContext(["light", ()=>{}]); //"light" is the initial value of the theme and 
//Call back the SetTheme function which sets the theme value whenever we switch the theme...

export default themeContext;