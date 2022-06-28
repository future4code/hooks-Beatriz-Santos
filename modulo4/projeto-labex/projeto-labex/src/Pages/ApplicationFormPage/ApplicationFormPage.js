import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';

const Pagina = styled.div `
    width: 100%;
    height: 100vh;
    background-image: url('https://c.wallhere.com/photos/9e/f9/space_galaxy_universe_space_art_nebula_digital_art-229942.jpg!d');
    background-attachment: fixed;
    background-size: 100%;
    color: white;
`
const Header = styled.div`
    padding: 3% 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    margin: 0;
    font-size: 50px;
`
const Form = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 1%;
    padding-top: 3%;
    width: 50%;
    height: 60%;
    border-radius: 25px;
    border: 1px solid white;
    background-color: rgba(58, 3, 58, 0.950);
`
export default function ApplicationFormPage(){
    const [paise, setPaise] = useState('')
    const [list, setList] = useState([])
    const [form, setForm] = useState({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: ''
    })
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    const inscribe = (event) => {
        event.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz/trips/${localStorage.getItem('idTrip')}/apply` 
        const headers = {
            headers:{
                auth: localStorage.getItem('token')
            }
        }
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: paise
        }
        axios.post(url, body, headers).then((response) => {
            alert('Inscrição enviada com sucesso :)')
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome';
        axios.get(url).then((response) => {
            setList(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <Pagina>
            <Header>
                <Title>{localStorage.getItem('nameTrip')}</Title>
                <Button variant = { 'contained' } sx={{ m: 1, width: '15%', height: '15%'}} onClick = { goBack }> Voltar </Button>
            </Header>
            <Form>
            <form onSubmit={ inscribe }>

                <TextField
                    required
                    type = { 'text' }
                    placeholder={'Nome'}
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    name = 'name'
                    value = { form.name }
                    inputProps={{ pattern: "^.{3,}" }}
                    title = { 'O nome deve ter mais que 3 caracteres' }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> 

                <TextField 
                    required
                    placeholder={'Idade'}
                    type = { 'number' }
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    name = { 'age' }
                    value = { form.age }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> 

                <TextField 
                    required
                    type = { 'text' }
                    placeholder={'Profissão'}
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    name = { 'profession' }
                    inputProps={{ pattern: "^.{10,}" }}
                    value = { form.profession }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> 

                <TextField 
                    required
                    type = { 'text' }
                    placeholder={'Texto Apresentação'}
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    name = { 'applicationText' }
                    inputProps={{ pattern: "^.{30,}" }}
                    value = { form.applicationText }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> 
                <InputLabel id="demo-simple-select-label">País</InputLabel>
                <Select
                    select
                    sx={{ m: 1, width: '60%', height: '10%'}} 
                    variant="filled"
                    value = { paise }
                    onChange = {event => setPaise(event.target.value)}
                >
                    <MenuItem >Selecione um país</MenuItem>
                    { list.map((listPaises, index) => (
                      <MenuItem value = { listPaises.nome } key={ index }>
                        { listPaises.nome }
                      </MenuItem>
                    ))}
                </Select>
                <br/>
                <Button variant = { 'contained' } sx={{ m: 1, width: '30%', height: '15%'}}> Enviar </Button>
            </form>
            </Form>
        </Pagina>
    )
}