import React from 'react'
// date: "21/12/20"
// description: "Noite mágica, com vista para as 69 luas de Jupiter"
// durationInDays: 540
// id: "QyKgl6nx0jdBwpGIb1tW"
// name: "Multi luau em Jupiter"
// planet: "Jupiter"
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