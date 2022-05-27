import React from 'react'
import axios from  'axios'
import styled from 'styled-components'
import imgAlbum from '../../img/img-playlist.jpg';

const Pagina = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
`
// const Saudacao = styled.h1`
//     display: flex;
//     width: 100%;
// `
const Criar = styled.div`
    background-color: #f1b139;
    width: 20%;
    height: 100%;
    margin: 8% 40px;
    padding: 20px;
    padding-bottom: 5%;
    border-radius: 5%;
    box-shadow: 2px 2px 10px black;
    text-align: center;
`
const Label = styled.p`
    font-size: 20px;
    margin-top: 25%;
`
const Input = styled.input`
    padding: 8px 10px;
    border: 2px solid black;
    border-radius: 20px;
`
const BotaoCriar = styled.button`
    width: 70%;
    padding: 10px;
    margin-top: 20%;
    border-radius: 15px;
    border: none;
    box-shadow: 5px 5px black;
    cursor: pointer;
`
const Title = styled.h1`
    text-align: center;
`
const ListaPlaylist = styled.div`
    background-color: #f1b139;
    margin-left: 5%;
    margin-top: 5%;
    padding-top: 2%;
    width: 60%;
    border-radius: 5%;
    box-shadow: 2px 2px 10px black;
`
const Lista = styled.div`
    padding: 2% 10%;
`
const Playlists = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    box-shadow: 2px 1px black;
    border-radius: 5px;
    margin: 15px;
    height: 60px;
`
const FotoAlbum = styled.img`
    width: 50px;
    margin: 10px;
    border-radius: 10px;
`
const Name = styled.p `
    padding-left: 50px;
    font-size: 20px;
`
const NameImg = styled.div`
    display:flex;
    width:85%;
    cursor:pointer;
`
const Botao = styled.div`
    margin: 15px;
`
const Remover = styled.button`
    width: 25px;
`

const headers = {
    headers:{
        Authorization: 'beatriz-santos-hooks'
    }
}
class AccessPlaylist extends React.Component {
    state = {
        playlist: [],
        playlistName: ''
    }
    onChangeNamePlaylist = (event) => {
        this.setState({playlistName: event.target.value})
    }

    componentDidMount = () => {
        this.showPlaylist()
    }

    addPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlistName
        }
        axios.post(url, body, headers).then((res) => {
            alert('Playlist criada');
            this.setState({playlistName: ''})
            this.showPlaylist()
        }).catch((err) =>{
            console.log(err);
        })
    }
    showPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        axios.get(url, headers).then((res) => {
            this.setState({playlist: res.data.result.list})
            console.log(this.state.playlist)
        }).catch((err) => {
            console.log('erro' + err)
        })
    }
    onClickDeletePlaylist = (idPlaylist) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`

        axios.delete(url, headers).then((res) => {
            this.showPlaylist()
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
        const lista = this.state.playlist.map((playlist) => {
            return (
                <Playlists key={playlist.id}>
                    <NameImg onClick={() => this.props.addTrack(playlist)}>
                        <FotoAlbum src={imgAlbum} />
                        <Name> {playlist.name} </Name>
                    </NameImg>
                    <Botao>
                        <Remover onClick={() => this.onClickDeletePlaylist(playlist.id)}>X</Remover>
                    </Botao>
                </Playlists>
            )
        })
        return(
            <Pagina>
                <Criar>
                    <Title>Criar uma nova Playlist</Title>
                    <Label> Digite o nome da playlist</Label> 
                    <Input placeholder={'Nome'} onChange={this.onChangeNamePlaylist} value={this.state.playlistName}/>
                    <div>
                        <BotaoCriar onClick={this.addPlaylist}> Adicionar </BotaoCriar>
                    </div>
                </Criar>
                <ListaPlaylist>
                    <Title>Minha Playlist</Title>
                    <Lista>
                        {lista}
                    </Lista>
                </ListaPlaylist>
            </Pagina>
        );
    }
}
export default AccessPlaylist;