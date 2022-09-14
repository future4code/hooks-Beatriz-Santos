import express, { Request, Response } from 'express'
import cors from 'cors'
import { product } from './data'

const app = express();

app.use(express.json());
app.use(cors());

let newProduct = [...product];

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API funcionando');
})

app.post('/create/product', (req: Request, res: Response) => {
    const authorization = req.headers.authorization;
    const { name, price } = req.body;
    let statusCode = 400;

    try{
        if(!authorization) {
            statusCode = 401;
            throw new Error('Authorization not found.');
        }
        if(!name || !price){
            statusCode = 422;
            throw new Error('check properties');
        }
        if(typeof name !== 'string' || typeof price !== 'number'){
            statusCode = 422;
            throw new Error('Incompatible types. name = string e price = number');
        }
        if(price <= 0){
            statusCode = 422;;
            throw new Error('Invalid product value');
        }
        const id: string = Math.floor(Date.now() * Math.random()).toString(36);
        newProduct.push({id, name, price});

        res.status(201).send(newProduct);
    }
    catch (error: any) {
        res.status(statusCode).send(error.message);
    }
})

app.get('/products', (req: Request, res: Response) => {
    const authorization = req.headers.authorization;
    const products = newProduct;
    let statusCode = 400;

    try{
        if(!authorization){
            statusCode = 401;
            throw new Error('Authorization not found.');
        }
        if(!products){
            statusCode = 404;
            throw new Error('Products not found');
        }
        res.status(200).send(products);
    };
    catch(error: any){
        res.status(statusCode).send(error.message);
    }
})
app.put('/edit/price/:id', (req: Request, res: Response) => {
    const authorization = req.headers.authorization;
    const idItem = req.params.id;
    const { newPrice } = req.body;
    let statusCode = 400;

    try{
        if(!authorization){
            statusCode = 401;
            throw new Error("Authorization not found");
        }
        if(!idItem){
            statusCode = 404;
            throw new Error('Id not found or incorrect');
        }
        if(!newPrice){
            statusCode = 422;
            throw new Error('New price not found.');
        }
        if(typeof newPrice !== 'number' ){
            statusCode = 422;
            throw new Error('Incompatible types. newPrice = number');
        }
        if(newPrice <= 0) {
            statusCode = 422;
            throw new Error('Invalid product value');
        }
        let item = newProduct.find((product) => {
            return product.id === idItem;
        })

        if(!item){
            statusCode = 404;
            throw new Error('Id not found or incorrect');
        }
        let updateProduct = newProduct.filter((product) => {
            return product.id !== idItem;
        })
        updateProduct = [
            ...updateProduct,
            {
                ...item,
                price: newPrice
            }
        ]
        res.status(200).send(updateProduct);
    }
    catch(error: any){
        res.status(statusCode).send(error.message);
    }
})

app.delete('/delete/:id', (req: Request, res: Response) => {
    const authorization = req.headers.authorization;
    const idItem = req.params.id;
    let statusCode = 404;
     
    try{
        if(!authorization){
            statusCode = 401;
            throw new Error('Authorization not found');
        }
        if(!idItem){
            statusCode = 404;
            throw new Error('Id not found or incorrect');
        }
        const deleteItem = newProduct.filter((product) => {
            return product.id !== idItem;
        })
        if(!deleteItem){
            statusCode = 404;
            throw new Error('Id not found or incorrect');
        }

        res.status(200).send(deleteItem);
    }
    catch(error: any){
        res.status(statusCode).send(error.message);
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
})