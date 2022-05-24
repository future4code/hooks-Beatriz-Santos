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
    
    deletarPessoa = (idPessoa) => {
        url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idPessoa}`

        axios.delete(url, headers).then((res) => {
            const usuarioDeletado  = this.state.pessoas.filter((pessoa) => {
                return pessoa.id !== idPessoa
            })
            return this.setState({pessoas: usuarioDeletado})
        }).catch((err) => {
            console.log('erro')
        })
    }

    render(){
        const listaPessoas = this.state.pessoas.map((pessoa, index) => {
            return(
                <div>
                    <span key={index}> {pessoa.name} </span>
                    <button onClick={() => this.deletarPessoa(pessoa.id)}>X</button>
                </div>
            )
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