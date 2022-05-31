import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const Pagina = styled.div`
    height: 100%;
    display: flex;
`
const Dados = styled.div`
    background-color: #f9b95af7;
    width: 20%;
    margin: 40px;
    padding: 25px;
    padding-bottom: 3%;
    border-radius: 5%;
    box-shadow: 2px 2px 10px black;
    text-align: center;
`
const Title = styled.h1`
    width: 97%;
    text-align:center;
    font-family: Trebuchet MS;
    margin-bottom: 5%;
`
const Label = styled.p`
    font-size: 20px;
    font-family: Andale Mono, monospace;
    margin-top: 10%;
`
const Input = styled.input`
    padding: 8px 10px;
    border: 1px solid black;
    border-radius: 20px;
`
const Botao = styled.button`
    width: 70%;
    padding: 10px;
    margin-top: 12%;
    border-radius: 15px;
    border: none;
    box-shadow: 5px 5px black;
    cursor: pointer;
`
const ListaMusica = styled.div`
    background-color: #f9b95af7;
    margin-left: 5%;
    margin-top: 5%;
    padding-top: 2%;
    width: 60%;
    height:100%;
    border-radius: 5%;
    box-shadow: 2px 2px 10px black;
`
const Musicas = styled.div`
    padding: 0% 10%;
    padding-bottom: 5%;
`
const Musica = styled.div`
    background-color: #fdaf3af7;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    border-radius: 10px;
    padding: 5px 15px;
    align-items: center;
    margin-top: 5%;
`
const Remover = styled.button`
    background: none;
    border: none;
    font-size: 25px;
    color: red;
    cursor: pointer;
`
const NomeMusica = styled.span`
    font-size: 20px;
    font-weight: bold;
    font-family:Andale Mono, monospace;
`
const headers = {
    headers:{
        Authorization: 'beatriz-santos-hooks'
    }
}
class AddTrack extends React.Component{
    state = {
        tracks: [],
        trackName: '',
        artistName: '',
        urlTrack: '',
        tocarMusica: true
    }

    onChangeNameTrack = (event) => {
        this.setState({trackName: event.target.value})
    }
    onChangeArtistName = (event) => {
        this.setState({artistName: event.target.value})
    }
    onChangeUrlTrack = (event) => {
        this.setState({urlTrack: event.target.value})
    }

    componentDidMount(){
        this.getPlaylistTrack()
    }

    getPlaylistTrack = () => {
        const id = this.props.detailPlaylist.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, headers).then((res) => {
            this.setState({tracks: res.data.result.tracks})
        } ).catch((err) => {
            console.log('Deus erro')
        })
    }
    postPlaylistTrack = () => {
        const id = this.props.detailPlaylist.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.trackName,
            artist: this.state.artistName,
            url: this.state.urlTrack
        }

        axios.post(url, body, headers).then((res) => {
            this.setState({trackName: '', artistName: '', urlTrack: ''})
            this.getPlaylistTrack()
        }).catch((err) => {
            console.log(err)
        })
    }
    deletePlaylistTrack = (idTrack) => {
        const idPlaylist = this.props.detailPlaylist.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idTrack}`
        
        axios.delete(url, headers).then((res) => {
            this.getPlaylistTrack()
        }).catch((err) => {
            console.log(err)
        })
    }

    render(){
        const music = this.state.tracks.map((music) => {
            return (
                 <Musica key={music.id}>
                     <div>
                        <NomeMusica>{music.name}</NomeMusica>
                     </div>
                     <div>
                        <audio src={music.url} controls ></audio>
                     </div>
                     <div>
                        <Remover onClick={() => this.deletePlaylistTrack(music.id)}>X</Remover>
                     </div>
                 </Musica> 
            ) 
         })
        return(
            <Pagina>
                <Dados>
                    <Title>Adicionar música a playlist</Title>

                    <div>
                        <Label>Nome da música</Label>
                        <Input placeholder={'track name'}  onChange={this.onChangeNameTrack} value={this.state.trackName}/> 
                    </div>

                    <div>
                        <Label>Nome do artista</Label>
                        <Input placeholder={'artist name'} onChange={this.onChangeArtistName} value={this.state.artistName}/> 
                    </div>

                    <div>
                        <Label>Url da música</Label>
                        <Input placeholder={'url'} onChange={this.onChangeUrlTrack} value={this.state.urlTrack}/> 
                    </div>

                    <Botao onClick={this.postPlaylistTrack}>Adicionar track</Botao>
                    <Botao onClick={this.props.voltarPagina}>Voltar</Botao>
                </Dados>
                <ListaMusica>
                    <Title>{this.props.detailPlaylist.name}</Title> 
                    <Musicas>
                        {music}
                    </Musicas>
                </ListaMusica>
                
            </Pagina>
        )
    }
}
export default AddTrack