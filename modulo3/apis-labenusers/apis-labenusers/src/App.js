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
    botao: false
  }
  
  trocarPagina = () => {
    this.setState({botao: !this.state.botao});
    if(this.state.botao){
      <InserirDados/>
    }
    else{
      <Usuarios />
    }
  }
  
  render(){
    return (
      <div>
        <button onClick={this.trocarPagina} value = {this.state.botao}>Trocar de Pagina</button>

      </div>
    );
  }
}

export default App;
