import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout'
import HTML5 from './pages/HTML5/HTML5';
import CSS3 from './pages/CSS3/CSS3';
import JavaScriptES6 from './pages/Javascript/JavaScriptES6';
import ReactJS from './pages/ReactJS/ReactJS';
import ExpressJS from './pages/ExpressJS/ExpressJS';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route index element={<HTML5 />} />
            <Route index element={<CSS3 />} />
            <Route index element={<JavaScriptES6 />} />
            <Route index element={<ReactJS />} />
            <Route index element={<ExpressJS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;