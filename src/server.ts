import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.listen(3003, () => {
    console.log(`App rodando na porta`);
});

interface Cliente {
  nome: string;
  email: string;
  telefone: string;
}

let clientes_bd : Cliente[] = [{
  nome: "Bob",
  email: "bob@gmail.com",
  telefone: "5123654899"
}];

//#GET
app.get('/clientes', (req:Request, res: Response)=>{
  return res.status(200).json(
    clientes_bd
  );
});

app.get('/clientes/:id', (req:Request, res: Response)=>{
  const {id} = req.params;
  const {nome, sobrenome} = req.query;//PARAMETRO QUE VOCE RECEBE PELA ENDPOINT
  return res.json({
    id,
    nome: "Bob",
    email: "spoja@gmail.com",
    sit: nome
  });
});

//MÉTODO POST PARA CADASTRAR - 201
app.post('/clientes',  (req:Request, res: Response)=>{
  const {nome, email, telefone} = req.body;
  clientes_bd.push({
    nome,
    email,
    telefone
  });

  return res.status(201).json(clientes_bd);
});

//#PUT
app.put('/clientes/:id', (req:Request, res: Response)=>{
  const id = req.params.id;
  const {nome, email, telefone} = req.body;
  return res.status(200).json(
    {
      id,
      nome,
      email,
      telefone
    }
  );
});

//#DELETE
app.delete('/clientes/:id', (req:Request, res: Response)=>{
  const id = req.params.id;
  return res.status(204);
});

// MIDL - Função que executa antes de uma ação	 concreta
function validacao(req:Request, res: Response, next:NextFunction){
  if(!req.body.email){
    return res.status(400).json({
      error: "Email não informado"
    });
  }
  return next;
}
