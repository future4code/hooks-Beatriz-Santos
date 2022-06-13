import React, { useState } from "react";
import styled from 'styled-components'
import Match from "./components/Match/Match";
import Perfil from './components/CardPerfil/Perfil'

const Pagina = styled.div`
  width: 100%;
  height: 500px;
`

export default function App() {
    const [page, setPage] = useState('perfil')

    const goToMatch = () => {
      setPage('matchs')
    }
    const goToPerfil = () => {
      setPage('perfil')
    }
    const renderizar = () => {
      switch (page) {
        case 'perfil':
          return <Perfil onChangePage={goToMatch}/> 
        
        case 'matchs':
          return <Match  onChangePage={goToPerfil}/>
          
        default:
          break;
      }
    }
    
  return (
    <Pagina >
      {renderizar()}
    </Pagina>
  );
}
