import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApplicationFormPage(){
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <h1>Aplicações</h1>
            <label>Viagens</label>
            <select>
                <option>Viagem 1</option>
                <option>Viagem 2</option>
                <option>Viagem 3</option>
            </select> <br/>
            <label>Nome: </label>
            <input /> <br/>
            <label>Idade: </label>
            <input /> <br/>
            <label>Profissão: </label>
            <input /> <br/>
            <label>Texto de apresentação: </label>
            <input /> <br/>
            <label>Paises</label>
            <select>
                <option>Pais 1</option>
                <option>Pais 2</option>
                <option>Pais 3</option>
            </select> <br/>
            <button onClick = { goBack }> Voltar </button>
            <button onClick = {() => alert('Inscrição enviada com sucesso') }> Enviar </button>
        </>
    )
}