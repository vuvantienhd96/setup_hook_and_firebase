import React from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../redux/actions';


const  Home = () => {
    const dispatch = useDispatch();
    const { currentUser, err } = useSelector(state => state.user)
    const handleLogout = () => {
        if(currentUser){
            dispatch(logoutUser())
        }
    }
    return (
        <div>
            <p>Xin chao ban day la home page</p>
            <Button variant="contained" onClick={handleLogout} size="small">
                    Logout
            </Button>

        </div>
    )
}

export default Home;
