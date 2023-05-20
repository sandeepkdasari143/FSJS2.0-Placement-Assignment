import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const AuthProtection = ({ children }) => {
    const token = useSelector((state) => state.taskManagerAuth.authToken);
    console.log(token)
    if (!token) {
        return <Navigate to="/reactjs/taskManager/login" replace={true} />;
    }
    return children;
}

export default AuthProtection