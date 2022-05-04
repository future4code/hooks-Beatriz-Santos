import React from 'react'
import './App.css';
import DadosGerais from './components/DadosGerais/DadosGerais';
import InformacaoEnsino from './components/InformacaoEnsino/InformacaoEnsino';
import InformacaoEnsinoSuperior from './components/InformacaoEnsinoSuperior/InformacaoEnsinoSuperior';
import FinalFormulario from './components/FinalFormulario/FinalFormulario';

class App extends React.Component { 
  state = {
    proximaPagina: 0
   }
 
  mudarPagina = () =>{
    this.setState({proximaPagina: this.state.proximaPagina + 1 });
  }
 
  paginaSeguinte = () =>{
      switch(this.state.proximaPagina){
       case 0:
         return <DadosGerais mudarEstado={this.mudarPagina}/>
      
       case 1:
         return <InformacaoEnsino mudarEstado={this.mudarPagina}/>
       
       case 2:
         return <InformacaoEnsinoSuperior mudarEstado={this.mudarPagina}/>
       
       case 3:
         return <FinalFormulario />
 
       default:
         return 'Página não encontrada :('
      }
  }
  render(){
    return (
      <>
        {this.paginaSeguinte()}
      </>
    );
  }
}

export default App;
