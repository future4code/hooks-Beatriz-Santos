import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Pagina = styled.div `
    width: 100%;
    height: 100vh;
    background-image: url('https://c.wallhere.com/photos/9e/f9/space_galaxy_universe_space_art_nebula_digital_art-229942.jpg!d');
    background-attachment: fixed;
    background-size: 100%;
    color: white;
`
const Header = styled.div`
    padding: 3% 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    margin: 0;
    
`
const DataTrip = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 1%;
    padding-top: 3%;
    width: 50%;
    height: 60%;
    border-radius: 25px;
    border: 1px solid white;
    background-color: rgba(58, 3, 58, 0.950);
`
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
        <Pagina>
            <Header>
                <Title>Criar Viagem</Title>
                <Button variant = { 'contained' } sx={{ m: 1, width: '15%', height: '15%'}} onClick = { goBack }> Voltar </Button>
            </Header>
            <form onSubmit={ createTrip }>
                <DataTrip>
                <TextField
                    placeholder = { 'Nome' }
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    name = { 'name' } 
                    value = { form.name } 
                    onChange = { (event) => setForm({...form, [event.target.name]: event.target.value})} 
                /> <br/>

                <TextField 
                    select
                    label="Planet"
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    value = { planet }
                    onChange = {(event) => setPlanet(event.target.value)}
                >
                    <option> Selecione um planeta </option>
                    <option value = { 'Mercurio' }> Mercúrio </option>
                    <option value = { 'Venus' }> Vênus </option>
                    <option value = { 'Terra' }> Terra </option>
                    <option value = { 'Marte' }> Marte </option>
                    <option value = { 'Jupiter' }> Júpiter </option>
                    <option value = { 'Saturno' }> Saturno </option>
                    <option value = { 'Urano' }> Urano </option>
                    <option value = { 'Netuno' }> Netuno </option>
                </TextField> 

                <TextField 
                    type = { 'date' } 
                    placeholder = { 'data' } 
                    name = { 'date' }
                    value = { form.date }
                    sx={{ m: 1, width: '60%', height: '10%'}}
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                />

                <TextField 
                    type = { 'text' } 
                    placeholder = { 'descrição' } 
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    name = { 'description' }
                    value = { form.description }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                />
                <TextField 
                    type = { 'number' } 
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    placeholder = { 'Duração' } 
                    name = { 'durationInDays' }
                    value = { form.durationInDays }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /><br/>
                    <Button  variant = { 'contained' } sx={{ m: 1, width: '35%', height: '10%'}}> Criar </Button>
                </DataTrip>
            </form>
        </Pagina>
    )
}