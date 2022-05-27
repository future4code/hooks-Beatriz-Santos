import React from 'react';
import styled from 'styled-components'
import AccessPlaylist from './components/AccessPlaylist/AccessPlaylist'
import AddTrack from './components/AddTrack/AddTrack';

const Pagina = styled.div`
  margin: 0px;
  padding: 0px;
`
class App extends React.Component {
  state ={
    pagina: 'access playlist',
    playlist: ''
  }

  onClickAccessPlaylist = () => {
    this.setState({pagina: 'access playlist'})
  }
  addTrack = (playlist) => {
    this.setState({pagina: 'detalhe playlist'})
    this.setState({playlist: playlist})
  }
  renderPage = () => {
    switch (this.state.pagina) {
      case 'access playlist':
        return <AccessPlaylist addTrack={this.addTrack}/>

      case 'detalhe playlist':
        return <AddTrack detailPlaylist={this.state.playlist}/>

      default:
        return 'Pagina não encontada :('
  }
}

  render(){
    return (
      <Pagina>
          {this.renderPage()} 
      </Pagina>
      
    );
  }
}

export default App;
