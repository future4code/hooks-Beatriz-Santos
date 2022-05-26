import React from 'react';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist'
import AccessPlaylist from './components/AccessPlaylist/AccessPlaylist'
class App extends React.Component {
  state ={
    pagina: 'create playlist'
  }

  onClickCreatePlaylist = () => {
    this.setState({pagina: 'create playlist'})
  }
  onClickAccessPlaylist = () => {
    this.setState({pagina: 'access playlist'})
  }
  addTrack = () => {
    console.log("vamos adicionar")
  }
  renderPage = () => {
    switch (this.state.pagina) {
      case 'create playlist':
        return <CreatePlaylist />
      
      case 'access playlist':
        return <AccessPlaylist />

      default:
        return 'Pagina não encontada :('
  }
}

  render(){
    return (
      <div>
        {/* <button onClick={this.onClickCreatePlaylist}>Criar Playlist</button>
        <button onClick={this.onClickAccessPlaylist}>Acessar Playlist</button>
        {this.renderPage()} */}
        <CreatePlaylist />
        <AccessPlaylist addTrack={this.addTrack}/>
      </div>
    );
  }
}

export default App;
