import React from 'react'
import axios from  'axios'

const headers = {
    headers:{
        Authorization: 'beatriz-santos-hooks'
    }
}
class AccessPlaylist extends React.Component {
    state = {
        playlist: []
    }
    componentDidMount = () => {
        this.showPlaylist()
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
    render(){
        const lista = this.state.playlist.map((playlist) => {
            return <p key={playlist.id}> {playlist.name} </p>
        })
        return(
            <>
                <h1>PLAYLIST</h1>
                {lista}
            </>
        );
    }
}
export default AccessPlaylist;