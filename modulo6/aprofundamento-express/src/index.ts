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
    catch (error) {
        res.send(error)
    }
})

app.post('/adicionar/afazer', (req: Request, res: Response) => {
    try {
        const {userId, id, title, completed } = req.body
        if (!title) throw new Error("Falta informações");

        const tarefa = afazeres;
        if(!tarefa) throw new Error("Lista não encontrada")

        const novaTarefa = {
            userId,
            id,
            title,
            completed
        }
        tarefa.push(novaTarefa)
        
        res.send(tarefa)
        
    } catch (error: any) {
        res.send(error.message)
    }
})

app.post('/editar/afazer/:userId/:id', (req: Request, res: Response) => {
    try{
        const { userId, id } = req.params;
        if (!userId) throw new Error("Id do usuário não encontrado :(");

        let tarefa = afazeres.filter((user) => {
           return Number(userId) === user.userId && Number(id) === user.id
        }).flat(1)
        if (!tarefa) throw new Error("Tarefa não encontrada")

        const inverter = tarefa.map((tarefa) => {
            const dever = {
                ...tarefa,
                completed: !tarefa.completed 
            }
            return dever
        })
        
        res.send(inverter)
    }catch (error: string | any) {
        res.send(error.message)
    }
})

app.delete('/deletar/:afazerId', (req: Request, res: Response) => {
    try{
        const afazerId = Number(req.params.afazerId)
        const tarefas = afazeres.filter((afazer) => {
            return afazer.id !== afazerId
        })
        res.send(tarefas)
    }
    catch(error){
        res.send('erro')
    }
})

app.get('/user/:userId', (req: Request, res: Response) => {
    try{
        const userId = Number(req.params.userId)

        const tarefaUser = afazeres.filter((user) => {
            return user.userId === userId
        })
        res.send(tarefaUser)
    }
    catch(error) {
        res.send('erro')
    }
})



app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})