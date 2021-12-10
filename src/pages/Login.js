import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import { useDispatch, useSelector } from 'react-redux';
// class mapDispathToProps
// class mapStateToProps
import { useNavigate, Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { loginUser, loginUserFacebook, loginUserGoogle } from '../redux/actions';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Login = () => {

    // redux <=> mapDispathToProps
    const dispatch = useDispatch();

    // navigate to home page
    const navigate = useNavigate();

    // get State from store
    const { currentUser, err } = useSelector(state => state.user)

    const [state, setstate] = useState({
        email: '',
        password: ''
    })

    const { email, password } = state;

    const handleLoginGoogle = () => {
        // todo
        dispatch(loginUserGoogle())
    }
    const handleLoginFacebook = () => {
        // todo
        dispatch(loginUserFacebook())
    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setstate({
            ...state,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        if(!email || !password ) return
        dispatch(loginUser(email, password))
        setstate({
            email: '',
            password: '',
        })
    }
    
    useEffect(() => {
        if(currentUser){
            // retrun homepage if had user
            navigate('/');
        }
    }, [currentUser, navigate])

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card sx={{ minWidth: 500 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Login Form
                            </Typography>
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                onChange={handleChange}
                                value={email}
                                name="email"
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                value={password}
                                name="password"
                            />
                            {err && <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="error">please input again !</Alert>
                            </Stack>}
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleSubmit} size="small">Login</Button>
                            <Button color="error" variant="contained" onClick={handleLoginGoogle} size="small">
                                <GoogleIcon />Login Google
                            </Button>
                            <Button variant="contained" onClick={handleLoginFacebook} size="small">
                                <FacebookIcon />Login Facebook
                            </Button>
                            
                        </CardActions>
                        <Typography sx={{ fontSize: 10 }} color="red" gutterBottom>
                                You dont have account, try register
                        </Typography>
                        <Link to="/register">
                            <Typography sx={{ fontSize: 10 }} color="blue" gutterBottom>
                                Register
                            </Typography>
                            
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>


        </Box>
    )
}

export default Login