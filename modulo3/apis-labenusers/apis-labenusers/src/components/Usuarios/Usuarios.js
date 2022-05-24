import React from "react";
import axios from "axios";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    authorization: "beatriz-santos-hooks"
  }
}

class Usuarios extends React.Component {
    state = {
        name: '',
        email: ''
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }
    onChangeEmail = (event) =>{
        this.setState({email: event.target.value});
    }
    
    addUser = () =>{
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(url, body, headers).then((res) =>{
            alert("Usuario criado com sucesso");
        }).catch((err) => {
            if(err.response.data.message === 'Invalid email'){
                alert("Email invalido.")
            }
            else{
                alert("Por favor, preencha todos os campor e verifique seus dados")
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Usuarios</h1>
                <label>Nome: </label>
                <input placeholder={"Nome"} onChange={this.onChangeName} value={this.state.name}/><br/>
                <label>Email: </label>
                <input placeholder={"nome@exemplo.com"} onChange={this.onChangeEmail} value = {this.state.email}/><br/>
                <button onClick={this.addUser}>Salvar</button>
            </div>
        )
    }
}
export default Usuarios