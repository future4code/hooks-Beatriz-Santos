import React from 'react'
// import axios from 'axios'

class CreatePlaylist extends React.Component {
    state = { 
        playlistName: ''
    }
    onChangeNamePlaylist = (event) => {
        this.setState({playlistName: event.target.value})
    }

    addPlaylist = () => {
        console.log(this.state.playlistName);

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