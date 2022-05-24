import React from 'react';
import InserirDados from './components/InserirDados/InserirDados';
import Usuarios from './components/Usuarios/Usuarios';
import styled from  'styled-components'

const Pagina = styled.div`
  margin: 20px;
`
const Botao = styled.button`
  cursor: pointer;
`
class App extends React.Component {
  state = {
    botao: false
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
      <Pagina>
        <button value = {this.state.botao} onClick={this.mudarValor}> Trocar de Pagina </button>
        {this.trocarPagina()}
      </Pagina>
    );
  }
}

export default App;
