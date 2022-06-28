import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreateTripPage(){
    const [planet, setPlanet] = useState('')
    const [form, setForm] = useState({
        name: '',
        planet: '',
        date: '',
        description: '', 
        durationInDays: ''
    })
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const createTrip = (event) => {
        event.preventDefault()
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/trips'
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        const body = {
            name: form.name,
            planet: planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post(url, body, headers).then((response) => {
            console.log(response.data.trip)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <h1>Criar Viagem</h1>
            <form onSubmit={ createTrip }>
                <input 
                    placeholder = { 'Nome' } 
                    name = { 'name' } 
                    value = { form.name } 
                    onChange = { (event) => setForm({...form, [event.target.name]: event.target.value})} 
                />

                <select 
                    value = { planet }
                    onChange = {(event) => setPlanet(event.target.value)}
                >
                    <option> Selecione um planeta </option>
                    <option value = { 'mercurio' }> Mercúrio </option>
                    <option value = { 'venus' }> Vênus </option>
                    <option value = { 'terra' }> Terra </option>
                    <option value = { 'marte' }> Marte </option>
                    <option value = { 'jupiter' }> Júpiter </option>
                    <option value = { 'saturno' }> Saturno </option>
                    <option value = { 'urano' }> Urano </option>
                    <option value = { 'netuno' }> Netuno </option>
                </select>

                <input 
                    type = { 'date' } 
                    placeholder = { 'data' } 
                    name = { 'date' }
                    value = { form.date }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                />

                <input 
                    type = { 'text' } 
                    placeholder = { 'descrição' } 
                    name = { 'description' }
                    value = { form.description }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                />
                <input 
                    type = { 'number' } 
                    placeholder = { 'Duração' } 
                    name = { 'durationInDays' }
                    value = { form.durationInDays }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                />
            <button> Criar </button>
            </form>
            <button onClick = { goBack }> Voltar </button>
        </>
    )
}