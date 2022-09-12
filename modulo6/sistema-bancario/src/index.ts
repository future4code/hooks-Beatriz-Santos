import express, { Request, Response } from 'express'
import cors from 'cors'
import { Client, clients, Extrato } from './data'

const app = express()
const clientsBank = clients

app.use(express.json());
app.use(cors());

// ======= PEGAR CLIENTS =======
app.get('/clients', (req: Request, res: Response) => {
    res.status(200).send(clientsBank)
})

// ======= PEGAR SALDO =======
app.get('/clients/:name/:cpf', (req: Request, res: Response) => {
    let statusCode = 400;
    const { name, cpf } = req.params;

    try{
        if(!name || !cpf){
            statusCode = 422;
            throw new Error('Verifique os dados passados.')
        }
        const verifyName = clientsBank.filter((client) => {
            return client.name === name
        })
        if(!verifyName){
            statusCode = 404.
            throw new Error('User name not found')
        }
        const verifyCpf = verifyName.find((client) => {
            return client.cpf === cpf;
        })
        if(!verifyCpf){
            statusCode = 404.
            throw new Error('User cpf not found')
        }

        res.status(200).send('Seu saldo é ' + verifyCpf.saldo.toFixed())

    }catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ======= CRIAR CONTA =======
app.post('/clients/create', (req: Request, res: Response) => {
    let statusCode = 400;
    const { name, cpf, dtBirth, saldo, extrato } = req.body

    try{
        if(!name || !cpf || !dtBirth || !saldo || !extrato){
            statusCode = 422;
            throw new Error('Propriedades faltando')
        }

        const buscaCpf = clientsBank.find((client) => {
            return client.cpf === cpf
        })
        if(buscaCpf){
            statusCode = 409;
            throw new Error('Cliente já existe')
        }

        const newClient: Client = {
            name,
            cpf,
            dtBirth,
            saldo,
            extrato
        }
        if(!newClient){
            statusCode = 400
            throw new Error('novo cliente não cadastrado')
        }
        clientsBank.push(newClient)
        res.status(201).send(clientsBank)
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ======= ADICIONAR SALDO ========
app.post('/client/deposito/:cpf', (req: Request, res: Response) => {
    let statusCode = 400;
    const { cpf } = req.params
    const { deposito } = req.body

    try{
        if(!cpf){
            statusCode = 422;
            throw new Error('Cpf não informado')
        }
        let user = clientsBank.find((client) => {
            return client.cpf === cpf
        })
        if(!user){
            statusCode = 404;
            throw new Error('User not found.')
        }

        user = {
            ...user,
            saldo: (user.saldo + deposito)
        }
        res.status(200).send(user)
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ========== PAGAR CONTA =========
app.put('/client/pagar/:cpf', (req: Request, res: Response) => {
    let statusCode = 400;
    const { cpf } = req.params
    const { value, descricao, data } = req.body

    try{
        if(!cpf || !value || !descricao){
            statusCode = 422;
            throw new Error('Preencha todos os campos');
        }

        let user  = clientsBank.find((client) => {
            return client.cpf === cpf;
        })
        if(!user){
            statusCode = 404;
            throw new Error('User nor found');
        }

        const newSaldo = (user.saldo - value);
        if(newSaldo < 0) throw new Error('Saldo insuficiente')
        
        user.extrato.push({value: value, description: descricao, date: data})
        user = {
            ...user,
            saldo: newSaldo,
        }

        res.send(user)

    }   
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

// ========== TRANSFERENCIA ===========
app.put('/clients/transferir/:name/:cpf', (req: Request, res: Response) =>{
    let statusCode = 400;
    const { name, cpf } = req.params
    const { nameDest, cpfDest, value } = req.body 

    try{
        if(!name || !cpf){
            statusCode = 422;
            throw new Error('Parametros em falta');
        }
        let client = clientsBank.find((client) => {
            return client.name === name && client.cpf === cpf
        })
        if(!client){
            statusCode = 404;
            throw new Error('Client not found');
        }
        let destinatario = clientsBank.find((client) => {
            return client.name === nameDest && client.cpf === cpfDest
        })
        if(!destinatario){
            statusCode = 404;
            throw new Error('Client not found')
        }
        const newSaldo = (client.saldo - value)
        if(newSaldo < 0) throw new Error('Saldo insuficiente para transferencia')
        const saldoDest = (destinatario.saldo + value)

        client = {
            ...client,
            saldo: newSaldo
        }

        destinatario = {
            ...destinatario,
            saldo: saldoDest
        }

        res.send(destinatario )
    }
    catch(error: any){
        res.status(statusCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log('Serner running in port 3003');
})