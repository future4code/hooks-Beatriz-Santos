import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Card = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
`
export default function CardDetails(props) {
    const navigate = useNavigate()

    const detailTrip = (idTrip) => {
        localStorage.setItem('idDetailTrip', idTrip)
        navigate(`/adimin/trips/${localStorage.getItem('id')}`)
    }
    return (
        <Card onClick = {() => detailTrip(props.trips.id)}>
            <p> { props.trips.name } </p>
            <p> { props.trips.planet } </p>
            <button> X </button>
        </Card>
    )
}