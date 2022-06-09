import React from 'react'
import CardPerfil from './CardPerfil'
import styled from 'styled-components'

const Pagina = styled.div`
   width: 100%;
    text-align: center;
`

const Header = styled.div`
    width: 20%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
`
const Title = styled.h1`
    color: red;
` 

export default function Perfil(props){
    return(
        <Pagina>  
            <Header>
                <Title>AstroMatch</Title>
                <button onClick={props.onChangePage}>Matchs</button>
            </Header>

            <CardPerfil usuarios = {props.dadosUsuario}/>
            <button onClick={props.like}>Sim</button>
            <button onClick={props.deslike}>Não</button>
        </Pagina>
    )
}