import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function LoadingWhenUser() {
    const navigate = useNavigate();
    const [time, setTime] = useState(5)

    useEffect(() => {
        
        return () => {
            const interVal = setInterval(() => setTime(time => --time), 1000)

            time == 0 && navigate('/login');
            return () => clearInterval(interVal)
        }
    }, [time, navigate])
    return (
        <React.Fragment>
            please wait ... {time}
        </React.Fragment>
    )
}
