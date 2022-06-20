import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const Pagina = styled.div`
    background-image: url('https://bordalo.observador.pt/v2/q:85/rs:fill:770:433/c:770:433:nowe:0:0/plain/https://s3.observador.pt/wp-content/uploads/2017/04/20154606/exoplanets_770x433_acf_cropped.jpg');
    height: 761px;
    background-size: 100%;
`
const Apresentacao = styled.div`
    border: 1px solid white;
`
const Title = styled.h1`
    margin: 0px;
    padding: 4% 10%;
    color: white;
`
const Texto = styled.span`
    color: white;
    width: 20%;
    font-size: 25px;
    text-align: center;
    margin-right: 10%;
    position: absolute;
    margin-left: 68%;
`
const Botoes = styled.div`
    width: 15%;
    height: 180px;
    margin-top: 13%;
    position: absolute;
    margin-left: 70%;
`
const Viagens = styled.div`
    text-align: center;
    margin-top: 35px;
`
const Admin = styled.div `
    text-align: center;
    margin-top: 35px;
`
export default function HomePage(){
    
    const navigate = useNavigate();
    const login = () => {
        navigate('/LoginPage')
    }
    const listTrips = () => {
        navigate('/ListTrips')
    }
    return (
        <Pagina>
            <Title> LabeX - Viagens espaciais </Title>
            
            <Texto>
                Confira as nossas viagens, escolha qual é mais a sua cara e inscrevá-se. 
                <p>Venha conhecer o espaço conosco. </p>
            </Texto>
            <Botoes>
                <Viagens>
                    <Button variant="contained" color='primary' onClick = { listTrips }> Ver viagens </Button>
                </Viagens>
                <Admin>
                    <Button variant="contained" color='primary' onClick = { login }> Área administrativa </Button>
                </Admin>
            </Botoes>
            
        </Pagina>
    )
}