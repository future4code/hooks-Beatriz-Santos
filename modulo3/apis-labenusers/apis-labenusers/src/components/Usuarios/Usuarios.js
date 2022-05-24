import React from "react";
import axios from "axios";

let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
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

    changeName = (event) => {
        this.setState({name: event.target.value})
    }
    changeEmail = (event) =>{
        this.setState({email: event.target.value});
    }
    
    //   adicionar = () => {
    //     const body = {
    //       name: "",
    //       email: ""
    //     }
    //     axios.post(url, body, headers).then((res) => {
    //         console.log(' Foi criado com sucesso')
    //         // this.pessoas();
    //     }).catch((err) => {
    //       console.log('erro')
    //     })
    //   }
    
    render(){
        return(
            <div>
                <h1>Usuarios</h1>
                <label>Nome: </label>
                <input placeholder={"Nome"} onChange={this.changeName} value={this.state.name}/><br/>
                <label>Email: </label>
                <input placeholder={"Email"} onChange={this.changeEmail} value = {this.state.email}/><br/>
                <button>Salvar</button>
            </div>
        )
    }
}
export default Usuarios