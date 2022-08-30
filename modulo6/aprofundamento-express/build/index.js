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
        res.send(tarefaConcluida);
        if (!tarefas)
            throw new Error('Tarefa não encontrada');
    }
    catch (_a) {
        res.send(Error);
    }
});
app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});
