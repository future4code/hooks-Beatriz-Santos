import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const Pagina = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
`
const Dados = styled.div`
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
const Title = styled.h1`
    width: 97%;
    text-align:center;
`
const ListaMusica = styled.div`
    background-color: #f1b139;
    margin-left: 5%;
    margin-top: 5%;
    padding-top: 2%;
    width: 60%;
    border-radius: 5%;
    box-shadow: 2px 2px 10px black;`

const Musicas = styled.div`
    padding: 2% 10%;
`
const Musica = styled.div`
    display: flex;
    justify-content: space-between;
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
        urlTrack: ''
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
    tocarMusica = (url) => {
        console.log('foi')
        return url.play();
    }
    
    
    render(){
        const music = this.state.tracks.map((music) => {
            return (
                 <Musica key={music.id}>
                     <p>{music.name}</p>
                     <audio src={music.url} controls></audio>
                     <button onClick={() => this.deletePlaylistTrack(music.id)}>X</button>
                 </Musica> 
            ) 
         })
        return(
            <Pagina>
                <Dados>
                    <Title>Adicionar música a playlist</Title>
                    <div>
                        <label>Nome da música</label><br/>
                        <input placeholder={'track name'}  onChange={this.onChangeNameTrack} value={this.state.trackName}/> 
                    </div>
                    <div>
                        <label>Nome do artista</label><br/>
                        <input placeholder={'artist name'} onChange={this.onChangeArtistName} value={this.state.artistName}/> 
                    </div>
                    <div>
                        <label>Url da música</label><br/>
                        <input placeholder={'url'} onChange={this.onChangeUrlTrack} value={this.state.urlTrack}/> 
                    </div>
                    <button onClick={this.postPlaylistTrack}>Adicionar track</button>
                </Dados>
                <ListaMusica>
                    <h1>Muúsicas</h1>
                    <h1>{this.props.detailPlaylist.name}</h1> 
                    <Musicas>
                        {music}
                    </Musicas>
                </ListaMusica>
            </Pagina>
        )
    }
}
export default AddTrack