import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
`
export default function CardDetails(props) {
    return (
        <Card>
            <p> { props.trips.name } </p>
            <p> { props.trips.planet } </p>
            <button> X </button>
        </Card>
    )
}