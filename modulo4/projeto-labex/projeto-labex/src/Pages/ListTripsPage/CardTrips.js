import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Pagina = styled.div`
    width: 70%;
    justify-content: space-between;
    margin-left: 100% ;
    margin-top: 5%;
    `
const Card = styled.div`
    border: 2px solid white;
    background-color: rgba(58, 3, 58, 0.559);
    margin-bottom: 0;
    margin-top: 3%;
    border-radius: 5%;
    width: 100%;
    color: white;
`
export default function CardTrips(props){
    const navigate = useNavigate();

    const inscrever = () => {
        navigate('/trips/application')
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
              <button onClick = { inscrever }> Inscrever </button>
        </CardActions>
    </Card>
    </Pagina>
    )
}