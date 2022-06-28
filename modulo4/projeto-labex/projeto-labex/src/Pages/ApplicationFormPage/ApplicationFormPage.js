import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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
        <>
        <button onClick = { goBack }> Voltar </button>
            <h1>Aplicações</h1>
            <h1>{localStorage.getItem('nameTrip')}</h1>
            <form onSubmit={ inscribe }>

                <label>Nome: </label>
                <input
                    required
                    type = { 'text' }
                    name = 'name'
                    value = { form.name }
                    pattern = { "^.{3,}" }
                    title = { 'O nome deve ter mais que 3 caracteres' }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> <br/>

                <label>Idade: </label>
                <input 
                    required
                    type = { 'number' }
                    name = { 'age' }
                    value = { form.age }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> <br/>

                <label>Profissão: </label>
                <input 
                    required
                    type = { 'text' }
                    name = { 'profession' }
                    pattern = { "^.{10,}" }
                    value = { form.profession }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> <br/>

                <label>Texto de apresentação: </label>
                <input 
                    required
                    type = { 'text' }
                    name = { 'applicationText' }
                    pattern = { "^.{30,}" }
                    value = { form.applicationText }
                    onChange = {(event) => setForm({...form, [event.target.name]: event.target.value})}
                /> <br/>
                <select
                    value = { paise }
                    onChange = {event => setPaise(event.target.value)}
                >
                    <option >Selecione um país</option>
                    { list.map((listPaises, index) => (
                      <option value = { listPaises.nome } key={ index }>
                        { listPaises.nome }
                      </option>
                    ))}
                </select>

                <button > Enviar </button>
            </form>
        </>
    )
}