import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateTripPage(){
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <h1>Criar Viagem</h1>
            <button onClick = { goBack }> Voltar </button>
            <button onClick = { () => alert('Viagem criada com sucesso !!') }> Criar </button>
        </>
    )
}