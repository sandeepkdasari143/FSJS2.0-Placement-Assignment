import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default HomeLayout