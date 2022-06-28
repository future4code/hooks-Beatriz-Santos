import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CardDetailsTrip from './CardDetailsTrip';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import Approve from '@mui/icons-material/Check';
import Repprove from '@mui/icons-material/Close';


const Pagina = styled.div`
    background: url('https://c.wallhere.com/photos/9e/f9/space_galaxy_universe_space_art_nebula_digital_art-229942.jpg!d') no-repeat center fixed;
    background-size: cover;
    background-blend-mode: darken;
    height: 100vh;
    color: white;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 15%;
`
const Title = styled.h1`
    padding: 5%;
`
const Candidates = styled.div`
    display: flex;
    border: 2px solid white;
    background-color: rgba(58, 3, 58, 0.810);
    padding: 0% 6%;
    border-radius: 20px;
    width: 40%;
    margin:0 auto;
    margin-top: 5%;
    color: white;
`
const DataCandidate = styled.div `
    padding-top: 5%;
    padding-left: 0;
`
const Buttons = styled.div`
    display: flex;
    border-bottom: 1px solid white;
    padding: 0 25%;
    justify-content: space-between;
`
export default function TripDetailsPage(){
    const navigate = useNavigate();
    const [details, setDetails] = useState({})
    const [candidates,setCandidates] = useState([])
    
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
    }

    const candidate = candidates.map((item) => {
        return (
            <DataCandidate>
                <p>{item.name}</p>
                <Buttons>
                    <Fab size="small" color="secondary" aria-label="add" onClick = {() => decide(true, item.id, item.name)}>
                        <Approve />
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="add" onClick = {() => decide(false, item.id)}>
                        <Repprove />
                    </Fab>
                </Buttons>
            </DataCandidate> 
        )
    })
    return (
        <Pagina>
            <Header>
                <Title>Detalhes</Title>
                <Button variant="contained" color={'secondary'} sx={{ m: 4, width: '7%',height: '' }} onClick = {() => navigate(-1)}>Voltar</Button>
            </Header>
            <CardDetailsTrip detail = {details} />
            <Candidates>
                <h4> Candidatos em avaliação</h4>
                { candidate }
            </Candidates>
        </Pagina>
    )
}