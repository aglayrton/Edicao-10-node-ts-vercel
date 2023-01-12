"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.listen(3003, () => {
    console.log(`App rodando na porta`);
});
let clientes_bd = [{
        nome: "Bob",
        email: "bob@gmail.com",
        telefone: "5123654899"
    }];
//#GET
app.get('/clientes', (req, res) => {
    return res.status(200).json(clientes_bd);
});
app.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome } = req.query; //PARAMETRO QUE VOCE RECEBE PELA ENDPOINT
    return res.json({
        id,
        nome: "Bob",
        email: "spoja@gmail.com",
        sit: nome
    });
});
//MÉTODO POST PARA CADASTRAR - 201
app.post('/clientes', (req, res) => {
    const { nome, email, telefone } = req.body;
    clientes_bd.push({
        nome,
        email,
        telefone
    });
    return res.status(201).json(clientes_bd);
});
//#PUT
app.put('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const { nome, email, telefone } = req.body;
    return res.status(200).json({
        id,
        nome,
        email,
        telefone
    });
});
//#DELETE
app.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;
    return res.status(204);
});
// MIDL - Função que executa antes de uma ação	 concreta
function validacao(req, res, next) {
    if (!req.body.email) {
        return res.status(400).json({
            error: "Email não informado"
        });
    }
    return next;
}
