import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '@mui/material'

const Pagina = styled.div`
    background: url('https://c.wallhere.com/photos/9e/f9/space_galaxy_universe_space_art_nebula_digital_art-229942.jpg!d') no-repeat center fixed;
    background-size: cover;
    background-blend-mode: darken;
    height: 100vh;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 8%;
`
const Buttons = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`
const Title = styled.h1`
    margin: 0px;
    padding: 15px;
    color: white;
`
const Categorias = styled.div`
    display: flex;
    font-size: 20px;
    padding: 0;
    margin-left: 20%;
    margin-right: 42%;
`
const Trips = styled.div `
    width: 60%;
    margin: 0 auto;
    color: white;
    padding: 3% 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: rgba(58, 3, 58, 0.900);
    border: 2px solid purple;
    border-radius: 20px;
    `
const Trip = styled.div`
    cursor: pointer;
`
export default function AdminHomePage(){
    const [trips, setTrips] = useState([])
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/')
    }
    const logout = () => {
        navigate(-1)
    }
    const createTrip = () => {
        navigate('/admin/trips/create')
    }

    useEffect(() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/trips'
        axios.get(url).then((response) => {
            setTrips(response.data.trips)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const trip = trips.map((item) => {
        return(
            <div key = { item.id }>
                <CardDetails trips = { item }/>
            </div>
        )
    })
    return (
        <Pagina>
            <Header>
                <Title> Painel Administrativo </Title>
                <Buttons>
                    <Button variant="contained" onClick = { goBack }> Voltar </Button>
                    <Button variant="contained" onClick = { logout }> Logout </Button>
                    <Button variant="contained" onClick = { createTrip }> Criar Viagem </Button>
                </Buttons>
            </Header>
            <Trips>
                <Categorias>
                    <p>Nome Viagem </p>
                    <hr/>
                    <p>Planeta </p>
                </Categorias>
                <Trip>
                    { trip }
                </Trip>
            </Trips>
            <div>
                footer
            </div>
        </Pagina>
    )
}