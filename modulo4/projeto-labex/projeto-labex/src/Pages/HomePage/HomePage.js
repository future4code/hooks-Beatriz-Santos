import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const Pagina = styled.div`
    background: url('https://bordalo.observador.pt/v2/q:85/rs:fill:770:433/c:770:433:nowe:0:0/plain/https://s3.observador.pt/wp-content/uploads/2017/04/20154606/exoplanets_770x433_acf_cropped.jpg') ;
    background-size: cover;
    background-blend-mode: darken;
    height: 100vh;
`
const Title = styled.h1`
    margin: 0px;
    padding: 5% 13%;
    color: white;
`
const Texto = styled.div`
    color: white;
    width: 35%;
    font-size: 25px;
    text-align: center;
    margin-right: 10%;
    margin-left: 60%;
`
const Botoes = styled.div`
    width: 15%;
    /* height: 180px; */
    margin-top: 5%;
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
        navigate('/login')
    }
    const listTrips = () => {
        navigate('/trips/list')
    }
    return (
        <Pagina>
            <Title> LabeX - Viagens espaciais </Title>
            
            <Texto>
                <p>Com a LabeX você pode realizar o sonho de conhecer outros planetas e viajar pelo espaço. Veja todas as oportunidades de viagens e não perca essa chance, faça agora sua incrição e vamos juntos para essa aventura que será inesquecivel. Eaí, partiu !? </p>
                <p>Let's explore the Universe</p>
            </Texto>
            <Botoes>
                <Viagens>
                    <Button variant="contained" color='secondary' onClick = { listTrips }> Ver viagens </Button>
                </Viagens>
                <Admin>
                    <Button variant="contained" color='secondary' onClick = { login }> Área administrativa </Button>
                </Admin>
            </Botoes>
            
        </Pagina>
    )
}