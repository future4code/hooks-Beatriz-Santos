import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    border: 2px solid white;
    background-color: rgba(58, 3, 58, 0.810);
    padding: 0% 6%;
    border-radius: 20px;
    width: 40%;
    margin:0 auto;
    color: white;
`
const Detail = styled.div`
    width: 35%;
    margin-right: 5%;
    font-size: 1.5em ;
    padding-top: 3%;
`
export default function CardDetailsTrip(props){
    return(
        <Card>
            <div>
                <h1> {props.detail.planet } </h1>
                <p> { props.detail.name } </p>
                <p> Data: { props.detail.date } </p>
                <p> Duração: { props.detail.durationInDays } dias</p>
            </div>
            <hr/>
            <Detail>
                <p> { props.detail.description} </p>
            </Detail>
        </Card>
    )
}