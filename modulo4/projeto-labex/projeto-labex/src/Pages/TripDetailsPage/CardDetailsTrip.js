import React from 'react'

export default function CardDetailsTrip(props){
    return(
        <>
            <h1> {props.detail.planet } </h1>
            <p> { props.detail.date } </p>
            <p> { props.detail.durationInDays } </p>
            <p> { props.detail.name } </p>
        </>
    )
}