import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout'
import HTML5 from './pages/HTML5/HTML5';
import CSS3 from './pages/CSS3/CSS3';
import JavaScriptES6 from './pages/Javascript/JavaScriptES6';
import ReactJS from './pages/ReactJS/ReactJS';
import ExpressJS from './pages/ExpressJS/ExpressJS';
import Home from './pages/Home/Home';
import Calculator from './pages/ReactJS/Calculator-App/Calculator';
import ToDo from './pages/ReactJS/ToDo-App/ToDo';
import TaskManager from './pages/ReactJS/TaskManager-App/TaskManager';
import TicTacToe from './pages/ReactJS/Tic-Tac-Toe-App/TicTacToe';
import AuthProtection from './pages/ReactJS/TaskManager-App/components/AuthProtection';
import LogIn from './pages/ReactJS/TaskManager-App/components/LogIn';
import Register from "./pages/ReactJS/TaskManager-App/components/Register";
import themeContext from './contextAPI/ThemeContext';

const App = () => {
  const [theme, setTheme] = React.useState("dark");

  //If the "theme" value of the context changes, then this useEffect will be called...
  React.useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  // For Browser Default Mode...
  React.useEffect(()=>{

    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
    
  },[])
  return (
    <>
    <themeContext.Provider value={{theme, setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/html5" element={<HTML5 />} />
            <Route path="/css3" element={<CSS3 />} />
            <Route path="/javascript" element={<JavaScriptES6 />} />

            <Route path="/reactjs" element={<ReactJS />} />
            <Route path="/reactjs/calculator" element={<Calculator />} />
            <Route path="/reactjs/todo" element={<ToDo />} />

            <Route path="/reactjs/taskManager" element={<AuthProtection><TaskManager /></AuthProtection>} />
            <Route path="/reactjs/taskManager/login" element={<LogIn />} />
            <Route path="/reactjs/taskManager/register" element={<Register />} />

            <Route path="/reactjs/ticTacToe" element={<TicTacToe />} />
            <Route path="/expressjs" element={<ExpressJS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
    </>
  );
}

export default App;