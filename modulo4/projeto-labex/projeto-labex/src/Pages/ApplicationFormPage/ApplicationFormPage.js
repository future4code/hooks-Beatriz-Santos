import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApplicationFormPage(){
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
        if(form.age < 18) {
            alert("A pessoa tem que ser maior de idade!!")
        }
        else{
            console.log('eviado')
            console.log(form)
        }
    }
    return (
        <>
        <button onClick = { goBack }> Voltar </button>
            <h1>Aplicações</h1>
            <form onSubmit={ inscribe }>
                <label>Viagens</label>
                <select>
                    <option>Viagem 1</option>
                    <option>Viagem 2</option>
                    <option>Viagem 3</option>
                </select> <br/>

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

                <label>Paises</label>
                <select>
                    <option>Pais 1</option>
                    <option>Pais 2</option>
                    <option>Pais 3</option>
                </select> <br/>

                <button > Enviar </button>
            </form>
        </>
    )
}