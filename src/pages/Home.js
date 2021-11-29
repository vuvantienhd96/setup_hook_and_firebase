import React from 'react'
import Button from '@mui/material/Button';

const  Home = () => {
    const handleLogout = () => {
        
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
