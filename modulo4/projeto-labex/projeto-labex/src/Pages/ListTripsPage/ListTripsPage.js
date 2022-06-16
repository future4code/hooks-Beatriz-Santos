import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ListTripsPage(){
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    const inscrever = () => {
        navigate('/ApplicationForm')
    }
    return (
        <>
            <h1>Lista Viagens</h1>
            <button onClick = { goBack }> Voltar </button>
            <button onClick = { inscrever }>Inscrever-se</button>
        </>
    )
}