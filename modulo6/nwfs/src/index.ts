import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { v4 as uuidv4 } from 'uuid';
import { Task, User } from "./types";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get('/users', async (req: Request, res: Response) => {
    const users = await connection.raw(`
        SELECT * FROM ToDoListUser;
    `)
    res.send(users[0])
})
app.get('/user/:id', async (req: Request, res: Response) => {
    let statusCode = 400;
    const id = req.params.id;

    try{
        const users = await connection.raw(`
            SELECT id, nickname FROM ToDoListUser
        `);

        const user = users[0].find((user: any) => { return user.id === id})

        if(!user){
            statusCode = 404;
            throw new Error('Usuário não encontrado');
        }

        res.status(200).send(user);

    }catch(error: any) {
        res.status(statusCode).send(error.message);
    }
})

app.get('/task', async (req: Request, res: Response) => {
    const tasks = await connection.raw(`
        SELECT * FROM ToDoListTask;
    `)
    res.status(200).send(tasks[0]);
})
app.post('/user', async (req: Request, res: Response) => {
    let statusCode = 400;
    const { name, nickname, email } = req.body;

    try{
        if(!name || !nickname || !email){
            statusCode = 422;
            throw new Error('Informações em falta');
        }
        const users = await connection.raw(`
            SELECT * FROM ToDoListUser;
        `);
        const newUser: User = {
            id: uuidv4(),
            name,
            nickname,
            email
        }
        if(users[0].find((user: any) => {return user.email === newUser.email} )){
            statusCode = 422;
            throw new Error('Email já cadastrado');
        }
        if(users[0].find((user: any) => {return user.nickname === newUser.nickname} )){
            statusCode = 422;
            throw new Error('Nickname já utilizado');
        }
        await connection.raw(`
            INSERT INTO ToDoListUser(id, name, nickname, email)
            VALUE('${newUser.id}', '${newUser.name}', '${newUser.nickname}', '${newUser.email}');
        `)
        res.status(201).send('Novo usuário criado com sucesso');

    }catch(error: any){
        res.status(statusCode).send(error.message);
    }

})
app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let statusCode = 400;
    const id = req.params.id;
    const {name, nickname } = req.body;

    try{
        if(!name || !nickname){
            statusCode = 422;
            throw new Error('Informações faltando');
        }
        const users = await connection.raw(`
            SELECT nickname FROM ToDoListUser;
        `)
        const updateUser = {
            name,
            nickname
        }
        const verifyNickname = users[0].map((users: any) => {
            return users.nickname;
        });
        
        if(verifyNickname.includes(updateUser.nickname)){
            statusCode = 422;
            throw new Error('Este nickname já está sendo utilizado');
        }

        await connection.raw(`
            UPDATE ToDoListUser
            SET name = "${updateUser.name}"
            WHERE id = "${id}";
        `);
        await connection.raw(`
            UPDATE ToDoListUser
            SET nickname = "${updateUser.nickname}"
            WHERE id = "${id}";
        `);

        res.status(200).send('Usuário alterado com sucesso');

    }catch(error: any){
        res.status(statusCode).send(error.message);
    }
})
app.post('/task', async (req: Request, res: Response) => {
    let statusCode = 400;
    let statusTask = req.body.status
    const { title, description, limit_Date, creator_User_Id } = req.body

    try{
        if(!title || !description || !limit_Date || !creator_User_Id){
            statusCode = 422;
            throw new Error('Informações faltando')
        }
        if(!statusTask){
            statusTask = 'To do';
        }

        const newTask: Task = {
            id: uuidv4(),
            title,
            description,
            statusTask,
            limit_Date,
            creator_User_Id
        }

        await connection.raw(`
            INSERT INTO ToDoListTask(id, title, description, status, limit_date, creator_user_id)
            VALUE("${newTask.id}", "${newTask.title}", "${newTask.description}", "${newTask.statusTask}", "${newTask.limit_Date}", "${newTask.creator_User_Id}");
        `)
        res.send(newTask);


    }catch(error: any) {
        res.status(statusCode).send(error.message);
    }

})
app.get('/task/:id', async (req: Request, res: Response) => {
    let statusCode = 400; 
    const id = req.params.id

    try{
        const tasks = await connection.raw(`
            SELECT * FROM ToDoListTask
        `);

        const task = tasks[0].find((task: any) => { return task.id === id});
        if(!task){
            statusCode = 409;
            throw new Error('Tarefa não encontrada');
        }

        res.status(200).send(task);
    }catch(error: any){
        res.status(statusCode).send(error.message);
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});