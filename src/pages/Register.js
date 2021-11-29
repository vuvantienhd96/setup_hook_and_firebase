import React, { useState } from 'react'
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

const Register = () => {

    const [state, setstate] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { email, password, confirmPassword, userName } = state;

    
    const handleChange = () => {
        
    }

    const handleSubmit = () => {

    }
    

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
                                Register Form
                            </Typography>
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                onChange={handleChange}
                                value={userName}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="email"
                                onChange={handleChange}
                                value={email}
                            />
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                value={password}
                            />
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                value={confirmPassword}
                            />

                        </CardContent>
                        <CardActions>
                            <Button onClick={handleSubmit} size="small">Register</Button>
                        </CardActions>
                        <Link to="/login">
                            <Typography sx={{ fontSize: 10 }} color="blue" gutterBottom>
                                login
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

export default Register