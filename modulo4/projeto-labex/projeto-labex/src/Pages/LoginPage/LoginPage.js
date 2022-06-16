import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const adminPage = () =>{
        navigate('/AdminHome')
    }
    return (
        <>
            <h1>Login</h1>
            <button onClick = { adminPage }> Logar </button>
            <button onClick = { goBack }> Voltar </button>
        </>
    )
}