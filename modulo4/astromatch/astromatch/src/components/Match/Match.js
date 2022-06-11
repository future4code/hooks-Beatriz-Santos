import axios from 'axios';
import Perfil from '@mui/icons-material/PersonAdd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Fab from '@mui/material/Fab'

const Img = styled.img`
    width: 10%;
    height: 5%;
    border-radius: 100px;
`
const Pagina = styled.div`
    width: 20%;
    text-align: center;
    margin: 0 auto;
    margin-top: 5%;
    padding: 5px 50px;
    background-color: pink;
`
const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Chats = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    border-top: none;
    margin: 10px 0px;
`
const NameMatch = styled.span `
    margin-left: 15px;
    font-size: 20px;
`
export default function Match(props){
    const [matchs, setMatchs] = useState([])

    const showMatchs = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz/matches'
        
        axios.get(url).then((response) => {
            setMatchs(response.data.matches)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        showMatchs()
    }, [])
    
    const deletarMatchs = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz/clear'

        axios.put(url).then((response) => {
            showMatchs()
        }).catch((err) => {
            console.log(err)
        })
    } 
    const chats = matchs.map((item) => {
        return(
            <Chats key={item.id}>
                <Img src={item.photo} />
                <NameMatch>{item.name}</NameMatch>
            </Chats>
        ) 
    })

    return(
        <Pagina>
            <Header>
                <h1>MATCHS</h1>
                <Fab size='small' color='secondary' aria-label="Matchs" onClick={props.onChangePage}>
                    <Perfil />
                </Fab>
            </Header>
            <div>
                {chats}
            </div>
            <Fab variant="extended" size="small" color="secondary" aria-label="add" onClick={deletarMatchs}>
                Desfazer Matchs
            </Fab>
        </Pagina>
    )
}