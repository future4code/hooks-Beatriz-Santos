import React from 'react'
import axios from  'axios'
import styled from 'styled-components'
import imgAlbum from '../../img/img-playlist.jpg';

const Playlists = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    height: 50px;
`
const FotoAlbum = styled.img`
    width: 50px;
    margin: 5px;
`
const Name = styled.p `
    padding-left: 30px;
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
            <>
                <h1>PLAYLIST</h1>
                {lista}
                <input placeholder={'Nome da Playlist'} onChange={this.onChangeNamePlaylist} value={this.state.playlistName}/>
                <button onClick={this.addPlaylist}> Adicionar </button>
                <button onClick={this.props.criarPlaylist}>Acessar Playlist</button>
            </>
        );
    }
}
export default AccessPlaylist;