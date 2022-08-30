import express, { Request, Response } from 'express';
import cors from 'cors'
import { afazeres } from './data'

const app = express()

app.use(express.json());
app.use(cors());

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong');
})

app.get('/afazeres', (req: Request, res: Response) => {
    const tarefas = afazeres;
    try {
        const tarefaConcluida = tarefas.filter((tarefa) => {
            return tarefa.completed
        })

        res.status(200).send(tarefaConcluida)

        if (!tarefas) throw new Error ('Tarefa não encontrada')
    }
    catch{
        res.send(Error)
    }
})



app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})