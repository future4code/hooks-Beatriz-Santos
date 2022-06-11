import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPerfil from './CardPerfil'
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import DeslikeIcon from '@mui/icons-material/HighlightOff';
import Contatos from '@mui/icons-material/Contacts';
import styled from 'styled-components'

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
const Title = styled.h2`
    color: black;
` 
const Buttons = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
`

export default function Perfil(props){
    const [usuario, setUsuario] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
      const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz/person`;

      axios.get(url).then((response)=>{
        setUsuario(response.data.profile)
      }).catch((err) => {
        console.log(err)
      })

    }, [])

    const matchs = (id, choice) => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz/choose-person'
        const body = {
            id: id,
            choice: choice
        }
        if(choice){
            axios.post(url, body).then((response) => {
                console.log(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        else{
            console.log('Not a match')
        }
        setCount(count + 1)
    }

    useEffect(() => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz/person`;
  
        axios.get(url).then((response)=>{
          setUsuario(response.data.profile)
        }).catch((err) => {
          console.log(err)
        })
  
      }, [count])
  
    return(
        <Pagina>  
            <Header>
                <Title>AstroMatch</Title>
                <Fab size='small' color='secondary' aria-label="Matchs" onClick={props.onChangePage}>
                    <Contatos />
                </Fab>
            </Header>

            <CardPerfil usuarios = {usuario}/>
            <Buttons>
            <Fab color="secondary" aria-label="deslike" onClick={()=> matchs(usuario.id, false)}>
                <DeslikeIcon />
            </Fab>
            <Fab color="secondary" aria-label="like" onClick={()=> matchs(usuario.id, true)}>
                <FavoriteIcon />
            </Fab>


            </Buttons>
        </Pagina>
    )
//     <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
}
