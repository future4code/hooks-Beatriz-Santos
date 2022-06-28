import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import axios from 'axios';

const Pagina = styled.div`
    display: flex;
    justify-content: center;
`
const Card = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
    width: 60%;
    padding: 0 5%;
    margin: 2%;
`
const Text = styled.p `
    font-size: 2ch;
`
const Name = styled.div`
    width: 25%;
    font-size: 1.3em;
`
const Planet = styled.div`
    width: 80%;
    font-size: 1.3em;
`
export default function CardDetails(props) {
    const navigate = useNavigate()
    let count = 0;
    const detailTrip = (idTrip) => {
        localStorage.setItem('idDetailTrip', idTrip)
        navigate(`/adimin/trips/${localStorage.getItem('id')}`)
    }

    const deleteTrip = (idTrip) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/trips/${idTrip}`
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.delete(url, headers).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
        alert('Viagem excluida com sucesso')
    }
    return (
        <Pagina>
            <Card onClick = {() => detailTrip(props.trips.id)}>
                <Name>
                    <Text> { props.trips.name } </Text>
                </Name>
                <Planet>
                    <Text> { props.trips.planet } </Text>
                </Planet>
            </Card>
                <IconButton aria-label={ "delete" } color = { 'primary' } onClick = {() => deleteTrip(props.trips.id) }>
                  <DeleteIcon />
                </IconButton>
        </Pagina>
    )
}