import React from  'react';
import styled from 'styled-components'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Img = styled.img`
  width: 100%;
  height:100%;
`

export default function CardPerfil(props){

    return(
    <ImageList sx={{ width: 600, height: 450 }} variant="woven">
        <ImageListItem key={props.usuarios.id}>
          <Img
            src={props.usuarios.photo}
            alt={props.usuarios.photo_alt}
          />
          <ImageListItemBar
            title={props.usuarios.name}
            subtitle={props.usuarios.bio}
          />
        </ImageListItem>
    </ImageList>
  );
}
    
