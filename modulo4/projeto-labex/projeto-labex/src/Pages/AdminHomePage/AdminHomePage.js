import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHomePage(){
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    const logout = () => {
        navigate('/login')
    }
    const createTrip = () => {
        navigate('/admin/trips/create')
    }
    return (
        <>
            <h1>Painel Administrativo</h1>
            <button onClick = { logout }> Logout </button>
            <button onClick = { goBack }> Voltar </button>
            <button onClick = { createTrip }> Criar Viagem </button>
        </>
    )
}