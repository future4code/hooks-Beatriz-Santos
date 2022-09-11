import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, USER_TYPE, users } from './data'

const app = express();

app.use(express.json())
app.use(cors())

// ========= EXERCICIO 01 ==========
//A) UTILIZANDO O MÉTODO GET PODEMOS BUSCAR TODOS OS USUÁRIOS
//B) /USERS SERIA MEU PATH
app.get('/users', (req: Request, res: Response) => {
    let statusCode = 400;
    
    try{
        if(!users) {
            statusCode = 404;
            throw new Error('Users not found')
        }
        res.status(200).send(users)
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ========== EXERCICIO 02 ==========
// A) FOI UTILZADO O QUERY PARAMS
// B) UTILIZANDO UM IF PARA VERIFICAR O VALOR DO TYPE PASSADO

app.get('/users/types', (req: Request, res: Response) =>{
    let statusCode = 400;
    const type = req.query.type as string

    try{
        if(!type){
            statusCode = 422
            throw new Error("type not found")
        }
        if(type.toUpperCase() !== 'NORMAL' && type.toUpperCase() !== 'ADMIN'){
            statusCode = 404
            throw new Error('Type no exist. Only NORMAL and ADMIN')
        }
        const filterUsers = users.filter((user) => {
            return user.type === type.toUpperCase()
        })

        res.status(200).send(filterUsers)
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ========== EXERCICIO 03 ==========
// A) PARAMS FOI UTIIZADO PARA PASSAR O NOME

app.get('/users/:name', (req: Request, res: Response) => {
    let statusCode = 400;
    const { name } = req.params
    try{
        const userName = users.find((user) => {
            return user.name.toUpperCase() === name.toUpperCase();
        })

        if(!userName){
            statusCode = 404;
            throw new Error('User not found');
        }

        res.status(200).send(userName)
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ========== EXERCICIO 04 ==========
app.post('/user', (req: Request, res: Response) => {
    let statusCode = 400;
    const { id, name, email, type, age} = req.body
    try{
        if(!id || !name || !email || !type || !age){
            statusCode = 422;
            throw new Error('Propriedades sem preencher');
        }
        if(type.toUpperCase() !== 'NORMAL' && type.toUpperCase() !== 'ADMIN'){
            statusCode = 422;
            throw new Error('Type inválido, apenas NORMAL e ADMIN');
        }
        const newUser: User = {
            id, name, email, type, age
        }
        users.push(newUser)

        res.status(201).send(users)
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log('Server running in http://localhost:3003')
}) 