import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../redux/actions';

// ui component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Home = () => {
    const dispatch = useDispatch();
    const { currentUser, err } = useSelector(state => state.user)

    const handleLogout = () => {
        if (currentUser) {
            dispatch(logoutUser())
        }
    }
    return (
        <React.Fragment>
            { currentUser && <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={currentUser.photoURL}
                        alt={currentUser.photoUR}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {currentUser.displayName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div" >
                            {currentUser.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>}
            <p>Xin chao ban day la home page</p>

            <Button variant="contained" onClick={handleLogout} size="small">
                Logout
            </Button>
        </React.Fragment>
    )
}

export default Home;
