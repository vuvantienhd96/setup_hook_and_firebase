import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import LoadingWhenUser from './LoadingWhenUser';

const UserRoute = ({ children, ...rest }) => {
    const { currentUser, err } = useSelector(state => state.user)
    // return currentUser ? <Route {...rest}  /> : <LoadingWhenUser />
    
        return currentUser ? children : <Navigate to="/login" />;
     
}

export default UserRoute 
