import React from "react";
import axios from "axios";

let url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    authorization: "beatriz-santos-hooks"
  }
}

class InserirDados extends React.Component { 
    state = {
        pessoas: []
    }
    componentDidMount = () => {
        this.pessoas()
    }
    pessoas = () => {
        axios.get(url, headers).then((res) => {
          this.setState({pessoas: res.data})
        }).catch((err) =>{
          console.log('Algo deu errado');
        })
      }

    render(){
        const listaPessoas = this.state.pessoas.map((pessoas, index) => {
            return<p key={index}> {pessoas.name} </p>
        })
        return(
            <>
                <h1>Inserir Dados</h1>
                <div>{listaPessoas}</div>
            </>
        )
    }
}
export default InserirDados