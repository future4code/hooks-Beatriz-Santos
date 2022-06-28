import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CardDetailsTrip from './CardDetailsTrip';

export default function TripDetailsPage(){
    const navigate = useNavigate();
    const [details, setDetails] = useState({})
    const [candidates,setCandidates] = useState([])
    const [aprovados, setAprovados] = useState([])
    
    useEffect(() => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/trip/${localStorage.getItem('idDetailTrip')}`
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.get(url, headers).then((response) => {
            console.log(response.data.trip.candidates)
            setDetails(response.data.trip)
            setCandidates(response.data.trip.candidates)

        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    const decide = (decide, idCandi, nameCandi) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/trips/${localStorage.getItem('idDetailTrip')}/candidates/${idCandi}/decide`
        const body = {
            approve: decide
        }
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.put(url, body, headers).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
        if(decide) {
            const aproved = [...aprovados, nameCandi]
            setAprovados(aproved)
        }
    }
    console.log(aprovados)

    const candidate = candidates.map((item) => {
        return (
            <p>
                {item.name}
                <button onClick = {() => decide(true, item.id, item.name)}> approve</button>
                <button onClick = {() => decide(false, item.id)}> repprove</button>
            </p>
        )
    })
    return (
        <>
            <h1>Detalhes</h1>
            <CardDetailsTrip detail = {details} />
            <h4> aprovados </h4>
            { aprovados }
            <h4> Em avaliação </h4>
            { candidate }
            <button onClick = {() => navigate(-1)}>Voltar</button>
        </>
    )
}