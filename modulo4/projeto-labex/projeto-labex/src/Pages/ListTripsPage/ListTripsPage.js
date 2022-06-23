import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardTrips from './CardTrips';
import styled from 'styled-components';
import { Button } from '@mui/material';

const Pagina = styled.div`
    padding-top: 50px;
    width: 100%;
    background-image: url('https://c.wallhere.com/photos/9e/f9/space_galaxy_universe_space_art_nebula_digital_art-229942.jpg!d');
    background-attachment: fixed;
    background-size: 100%;
    height: 100%;
`
const Title = styled.h1`
    margin:0;
    padding: 0;
    color: white;
    display: flex;
    justify-content: space-between;
    margin-right: 10%;
    margin-left: 5%;
`
const Card = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    margin-top: 5%;
`
export default function ListTripsPage(){
    const [ trips, setTrips ] = useState([]);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
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
                <CardTrips value = { item } />
            </div>
        )
    })
    console.log(trips)
    return (
        <Pagina>
            <Title> 
                Lista Viagens
                <Button variant = "contained" color = { 'secondary' } onClick = { goBack }> Voltar </Button>
            </Title>
            <Card>
                { trip }
            </Card>
        </Pagina>
    )
}