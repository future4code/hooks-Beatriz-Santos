import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Pagina = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('https://c.wallhere.com/photos/9e/f9/space_galaxy_universe_space_art_nebula_digital_art-229942.jpg!d');
    background-attachment: fixed;
    background-size: 100%;
`
const Inputs = styled.div `
    margin: 0 auto;
    margin-top: 1%;
    padding-left: 7%;
    padding-top: 3%;
    width: 50%;
    height: 60%;
    border-radius: 25px;
    border: 1px solid white;
    background-color: rgba(58, 3, 58, 0.900);
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 3%;
`
const Botao = styled.div`
    margin-left: 25%;
`
export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onClickLogar = (event) => {
       
        event.preventDefault()

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/login';
        const body = {
            email: email,
            password: password
        }

        axios.post(url, body).then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.user.id)
            navigate('/admin/trips/list')
        }).catch((err) => {
            alert('Verfique os dados para fazer o login')
        })

    }
    return (
        <Pagina>
                <Header>
                    <Button 
                        variant = { 'contained' } 
                        color = { 'secondary' } 
                        onClick = { goBack }
                        sx={{ m: 4, width: '7%' }}
                    > 
                            Voltar 
                    </Button>
                </Header>
            <Inputs>
                    <h1>Login</h1>

                <form onSubmit = { onClickLogar }>
                    <TextField
                        required
                        id = "outlined-required"
                        type = { 'email' }
                        sx={{ m: 4, width: '72%' }}
                        value = { email }
                        onChange = { onChangeEmail }
                    />
                    <TextField
                        required
                        id = "outlined-required"
                        type = { 'password' }
                        value = { password } 
                        sx={{ m: 4, width: '72%' }}
                        onChange = { onChangePassword }
                    /> <br />
                    <Botao>
                        <Button type = {'submit'} variant = { 'contained' } sx={{ m: 1, width: '35%', height: '10%'}}> Logar </Button>
                    </Botao>
                </form>
            </Inputs>
        </Pagina>
    )
}