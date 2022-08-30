"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/ping', (req, res) => {
    res.status(200).send('pong');
});
app.get('/afazeres', (req, res) => {
    const tarefas = data_1.afazeres;
    try {
        const tarefaConcluida = tarefas.filter((tarefa) => {
            return tarefa.completed;
        });
        res.status(200).send(tarefaConcluida);
        if (!tarefas)
            throw new Error('Tarefa não encontrada');
    }
    catch (error) {
        res.send(error);
    }
});
app.post('/adicionar/afazer', (req, res) => {
    try {
        const { userId, id, title, completed } = req.body;
        if (!title)
            throw new Error("Falta informações");
        const tarefa = data_1.afazeres;
        if (!tarefa)
            throw new Error("Lista não encontrada");
        const novaTarefa = {
            userId,
            id,
            title,
            completed
        };
        tarefa.push(novaTarefa);
        res.send(tarefa);
    }
    catch (error) {
        res.send(error.message);
    }
});
app.post('/editar/afazer/:userId/:id', (req, res) => {
    try {
        const { userId, id } = req.params;
        if (!userId)
            throw new Error("Id do usuário não encontrado :(");
        let tarefa = data_1.afazeres.filter((user) => {
            return Number(userId) === user.userId && Number(id) === user.id;
        }).flat(1);
        if (!tarefa)
            throw new Error("Tarefa não encontrada");
        const inverter = tarefa.map((tarefa) => {
            const dever = Object.assign(Object.assign({}, tarefa), { completed: !tarefa.completed });
            return dever;
        });
        res.send(inverter);
    }
    catch (error) {
        res.send(error.message);
    }
});
app.delete('/deletar/:afazerId', (req, res) => {
    try {
        const afazerId = Number(req.params.afazerId);
        const tarefas = data_1.afazeres.filter((afazer) => {
            return afazer.id !== afazerId;
        });
        res.send(tarefas);
    }
    catch (error) {
        res.send('erro');
    }
});
app.get('/user/:userId', (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const tarefaUser = data_1.afazeres.filter((user) => {
            return user.userId === userId;
        });
        res.send(tarefaUser);
    }
    catch (error) {
        res.send('erro');
    }
});
app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});
