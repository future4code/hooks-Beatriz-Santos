import React from 'react'
import axios from 'axios'

const headers = {
    headers:{
        Authorization: 'beatriz-santos-hooks'
    }
}

class CreatePlaylist extends React.Component {
    state = { 
        playlistName: ''
    }
    onChangeNamePlaylist = (event) => {
        this.setState({playlistName: event.target.value})
    }

    addPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlistName
        }
        axios.post(url, body, headers).then((res) => {
            alert('Playlist criada');
            this.setState({playlistName: ''})
        }).catch((err) =>{
            console.log(err);
        })
    }
    render(){
        return(
            <>
                <input placeholder={'Nome da Playlist'} onChange={this.onChangeNamePlaylist} value={this.state.playlistName}/>
                <button onClick={this.addPlaylist}> Adicionar </button>
            </>
        );
    }
}
export default CreatePlaylist;