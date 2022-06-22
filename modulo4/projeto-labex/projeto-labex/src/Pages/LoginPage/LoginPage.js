import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const onClickLogar = () => {
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
            console.log(err.message)
        })

    }
    return (
        <>
            <h1>Login</h1>
            <label>Email</label>
            <input type = { 'text'} onChange = {onChangeEmail} value = {email} />
            <label>Senha</label>
            <input type = { 'password'} onChange = {onChangePassword} value = {password} />
            <button onClick = { onClickLogar }> Logar </button>
            <button onClick = { goBack }> Voltar </button>
        </>
    )
}