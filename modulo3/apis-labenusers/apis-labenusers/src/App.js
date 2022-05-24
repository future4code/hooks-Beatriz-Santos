import axios from 'axios';
import React from 'react';
import InserirDados from './components/InserirDados/InserirDados';
import Usuarios from './components/Usuarios/Usuarios';


  
class App extends React.Component {
  state = {
    botao: true
  }
  
  trocarPagina = () => {
    if(this.state.botao){
     return  <InserirDados/> ;
    }

    else{
      return <Usuarios />;
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
