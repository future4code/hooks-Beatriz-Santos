import axios from 'axios';
import React from 'react';
import InserirDados from './components/InserirDados/InserirDados';
import Usuarios from './components/Usuarios/Usuarios';

let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    authorization: "beatriz-santos-hooks"
  }
}
  
class App extends React.Component {
  state = {
    botao: true
  }
  
  trocarPagina = () => {
    if(this.state.botao){
     const paginaRenderizada = <InserirDados/> 
     return paginaRenderizada;
    }
    else{
      const paginaRenderizada = <Usuarios />
      return paginaRenderizada;
    }
  }

  mudarValor = () => {
    this.setState({botao: !this.state.botao});
  }
  
  render(){
    return (
      <div>
        <button value = {this.state.botao} onClick={this.mudarValor}> Trocar de Pagina </button>
        {this.trocarPagina()}
      </div>
    );
  }
}

export default App;
