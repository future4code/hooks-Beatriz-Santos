import React, { useState, useEffect } from "react";
import axios from "axios";
import Perfil from "./components/CardPerfil/Perfil";
import Match from "./components/Match/Match";

const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz/person`;

export default function App() {
    const [usuario, setUsuario] = useState([])
    const [match, setMatch] = useState([])
    const [buttons, setButtons] = useState(0)
    const [page, setPage] = useState('perfil')

    const renderizar = () => {
      switch (page) {
        case 'perfil':
          return <Perfil dadosUsuario = {usuario} like={like} deslike={desLike} onChangePage={goToMatch}/> 
        
        case 'matchs':
          return <Match pares={match} onChangePage={goToPerfil}/>
          
        default:
          break;
      }
    }
    const goToMatch = () => {
      setPage('matchs')
    }
    const goToPerfil = () => {
      setPage('perfil')
    }
    useEffect(() => {
      axios.get(url).then((response)=>{
        setUsuario(response.data.profile)
      }).catch((err) => {
        console.log(err)
      })

    }, [])
    
    const like = () => {
      setButtons(buttons + 1)
      const matchs = [...match, usuario]
      setMatch(matchs)
    }
  
    const desLike = () =>{
      setButtons(buttons + 1)
    } 

    useEffect(() => {
      axios.get(url).then((response)=>{
        setUsuario(response.data.profile)
      }).catch((err) => {
        console.log(err)
      })

    }, [buttons])


  return (
    <div >
      {renderizar()}
    </div>
  );
}
