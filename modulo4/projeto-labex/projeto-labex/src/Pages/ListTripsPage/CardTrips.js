import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Button } from '@mui/material';

const Pagina = styled.div`
    width: 70%;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 10%;
    `
const Card = styled.div`
    border: 2px solid white;
    background-color: rgba(58, 3, 58, 0.810);
    padding: 0% 6%;
    border-radius: 5%;
    width: 100%;
    color: white;
`
const CardActions = styled.div`
    padding-bottom: 5%;
    text-align: center;
`
export default function CardTrips(props){
    const navigate = useNavigate();

    const inscrever = (idTrip, nameTrip) => {
        localStorage.setItem('idTrip', idTrip)
        localStorage.setItem('nameTrip', nameTrip)
        navigate('/trips/application');
    }

    return (
        <Pagina>
    <Card >
        <CardContent>
            <Typography>
                <h2> { props.value.planet } </h2>
                <h4> { props.value.name } </h4>
            </Typography>

            <Typography color="white">
                <p>Data: { props.value.date } </p>
                <p>Duração da Viagem: { props.value.durationInDays} dias</p>
            </Typography>
            
            <Typography variant="body2">
                <p> { props.value.description} </p>
            </Typography>
        </CardContent>

        <CardActions>
              <Button variant="contained" color={'primary'} onClick = {() => inscrever(props.value.id, props.value.planet) }> Inscrever </Button>
        </CardActions>
    </Card>
    </Pagina>
    )
}