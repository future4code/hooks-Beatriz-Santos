import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <>
            <h1>Painel Administrativo</h1>
            <button onClick = { logout }> Logout </button>
            <button onClick = { goBack }> Voltar </button>
            <button onClick = { createTrip }> Criar Viagem </button>
            { trip }
        </>
    )
}