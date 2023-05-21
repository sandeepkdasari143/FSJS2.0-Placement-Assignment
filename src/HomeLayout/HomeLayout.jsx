import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className='h-[100vh] dark:bg-[rgb(20,20,31)] bg-[rgb(255,255,255)]'>
            <Header />
            <div className='flex'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default HomeLayout