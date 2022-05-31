import React from "react";
import axios from "axios";
import styled from 'styled-components'

const DadosInput = styled.div`
    width: 25%;
    margin: 0 auto;
    margin-top: 50px;
    height: 150px;
    padding-top: 25px;
    text-align: center;
    border: 1px solid black;
`
const Item = styled.div`
    padding: 8px 0;
`
const Botao = styled.button`
    padding: 5px 10px;
    margin-top: 10px;
    cursor: pointer;
`
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
            <DadosInput>
                <Item>
                    <label>Nome: </label>
                    <input placeholder={"Nome"} onChange={this.onChangeName} value={this.state.name}/><br/>
                </Item>
                <Item>
                    <label>Email: </label>
                    <input placeholder={"nome@exemplo.com"} onChange={this.onChangeEmail} value = {this.state.email}/><br/>
                </Item>
                <Botao onClick={this.addUser}>Salvar</Botao>
            </DadosInput>
        )
    }
}
export default Usuarios