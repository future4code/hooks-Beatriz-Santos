import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    usuarioNome: '',
    usuarioMensagem: ''
}
onChangeInputNome = (event) =>{
    this.setState({usuarioNome: event.target.value})
}
onChangeInputMensagem = (event) =>{
    this.setState({usuarioMensagem: event.target.value})
}
enviarMensagem = () =>{
    console.log('Mensagem Enviada');
    console.log(this.state.usuarioNome + ': '+ this.state.usuarioMensagem);
    
    // 'Zerar' inputs
    this.setState({usuarioNome: ''});
    this.setState({usuarioMensagem: ''}); 
  }
render (){
    return(
        <div className = {'App'}>
          <div className = {'tela-das-mensagens'}>
            
          </div>
          <div className = {'funcionalidades'}>
            <input  className = {'nome-usuario'}     placeholder = {'Usuário'}  onChange = {this.onChangeInputNome}     value = {this.state.usuarioNome} />
            <input  className = {'valor-mensagem'} placeholder = {'Mensagem'} onChange = {this.onChangeInputMensagem} value = {this.state.usuarioMensagem} />

            <button onClick={this.enviarMensagem}>Enviar!</button>
          </div>
        </div>
    );
}
}

export default App;
