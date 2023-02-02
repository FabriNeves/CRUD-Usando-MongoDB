import express from "express";

const app = express();

app.use(express.json())



const tarefas = [
    {
        id:1,
        "tarefa" : "Iniciar um Projeto"
    },
    {
        id:2,
        "tarefa" : "Programar todo dia"
    },
    {
        id:3,
        "tarefa" : "Criar um arquivo README.MD"
    },
    {
        id:4,
        "tarefa" : "Fazer commit todo dia"
    },
    {
        id:5,
        "tarefa" : "Se comprometer com o prazo"
    }
    
]

app.get('/',(req,res)=> {
    res.status(200).send('Lista de Tarefas');
})

app.get('/tarefas',(req,res)=> {
    res.status(200).json(tarefas);
})


app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id; // Armazena o id da rota , exemplo tarefas/2 , então o valor do id será 2;
    let index = buscaTarefa(id); // retorna o id    
    res.json(tarefas[index]);       
  });

app.post('/tarefas',(req,res)=> {
    tarefas.push(req.body);
    res.status(201).send('Tarefa adcionada');
})


app.put('/tarefas/:id', (req, res) => {

    const id = req.params.id; // Armazena o id da rota , exemplo tarefas/2 , então o valor do id será 2;
    let index = buscaTarefa(id); // retorna o id 
    tarefas[index].tarefa = req.body.tarefa; // Mensagem do corpo da requisição. 
    // index seleciona o elemento da array '.tarefa' para atribuir ao campo tarefa. 
    // req.body chega como um arquivo JSON , e  '.tarefa' se refere a espeficicamente a string do campo tarefa. 

    res.json(tarefas);
        
  });

  
app.delete('/tarefas/:id', (req, res) => {

    let {id} = req.params;
    let index = buscaTarefa(id); // retorna o id 
    tarefas.splice(index,1);
    res.send(`Tarefa ${id} foi deletada.`);
        
  });

  

function buscaTarefa(id){

    return tarefas.findIndex((tarefa) => tarefa.id == id) ;
     // Nota : tarefa seleciona o objeto dentro da array de objetos e caso a expressão (tarefa.id == id ) for verdadeira , retorna o index da tarefa atual;
}

export default app ; 