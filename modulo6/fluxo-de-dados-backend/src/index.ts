import express, { Request, Response } from 'express'
import cors from 'cors'
import { product } from './data'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API funcionando');
})
app.post('/create/product', (req: Request, res: Response) => {
    const authorization = req.headers.authorization
    const { id, name, price } = req.body
    let statusCode = 400

    try{
        if(!authorization) {
            statusCode = 401
            throw new Error('Authorization not found.')
        }
        if(!id || !name || !price){
            statusCode = 422
            throw new Error('check properties')
        }
        
        const newProduct = [...product, {id, name, price}]
        res.status(201).send(newProduct)
    }
    catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})