import React from 'react';
import styled from 'styled-components'
import AccessPlaylist from './components/AccessPlaylist/AccessPlaylist'
import AddTrack from './components/AddTrack/AddTrack';

const Pagina = styled.div`
  margin: 0;
  padding: 0;
  height: 600px;
  display: flex;
`
const Header = styled.div`
  background-color: grey;
  width: 20%;
  height: 100%;
  display: flex;
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
      <>
          {this.renderPage()} 
      </>
      
    );
  }
}

export default App;
