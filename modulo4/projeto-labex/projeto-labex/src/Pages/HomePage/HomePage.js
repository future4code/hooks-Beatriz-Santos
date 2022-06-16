import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage(){
    
    const navigate = useNavigate();
    const login = () => {
        navigate('/LoginPage')
    }
    const listTrips = () => {
        navigate('/ListTrips')
    }
    return (
        <>
            <h1> Home </h1>
            <button onClick = { login }> Área administrativa </button>
            <button onClick = { listTrips }> Lista viagens </button>
        </>
    )
}