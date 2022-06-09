import React from  'react';
import styled from 'styled-components'

const Pagina = styled.div`  
  height: 500px;
  border: 1px solid black;
`
const Img = styled.img`
  position: relative;
  width: 20%;
`

export default function CardPerfil(props){

    return(
        <Pagina>
          <h2>{props.usuarios.name}</h2>
          <Img src={props.usuarios.photo} alt={props.usuarios.photo_alt} />
          <p>{props.usuarios.bio}</p>
        </Pagina>
    )
}