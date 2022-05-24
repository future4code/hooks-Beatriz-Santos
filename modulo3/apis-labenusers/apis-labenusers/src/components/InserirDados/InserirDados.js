import React from "react";
import axios from "axios";
import styled from 'styled-components'

const Pagina = styled.div`
    margin: 25px 0;
`
const Lista = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid black;
`
const Nome = styled.p`
    padding: 0 30px;
`
const Botao = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 20px;
    cursor: pointer;
`
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
                <>
                    <Lista>
                        <Nome key={index}> {pessoa.name} </Nome>
                        <Botao onClick={() => this.deletarPessoa(pessoa.id)}>X</Botao>
                    </Lista>
                </>
            )
        })
        return(
            <>
                <Pagina>{listaPessoas}</Pagina>
            </>
        )
    }
}
export default InserirDados