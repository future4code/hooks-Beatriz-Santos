import axios from 'axios';
import React from 'react';

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
    
    
    render(){
        const music = this.state.tracks.map((music) => {
            return (
                 <div key={music.id}>
                     <p>{music.name}</p>
                 </div> 
            ) 
         })
        return(
            <>
                <h1>Muúsicas</h1>
                <h1>{this.props.detailPlaylist.name}</h1> 
                <input placeholder={'track name'}  onChange={this.onChangeNameTrack} value={this.state.trackName}/> 
                <input placeholder={'artist name'} onChange={this.onChangeArtistName} value={this.state.artistName}/> 
                <input placeholder={'url'}         onChange={this.onChangeUrlTrack} value={this.state.urlTrack}/> 
                <button onClick={this.postPlaylistTrack}>Adicionar track</button>
               {music}
            </>
        )
    }
}
export default AddTrack