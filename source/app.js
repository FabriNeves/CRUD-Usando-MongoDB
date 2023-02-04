
// Blibliotecas Importadas
import express from "express";
import db from "./config/mongoConection.js";
import tarefas from "./models/Tarefas.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão...")); // bind = ligar , conectar.
db.once("open", () => console.log("Conexão com o banco de dados estabelecida."));

const app = express();
app.use(express.json())

routes(app);

app.get('/tarefas', (req, res) => {    
    tarefas.find((err, tarefas) => {        
        res.status(200).json(tarefas);
    })
})


app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id; // Armazena o id da rota , exemplo tarefas/2 , então o valor do id será 2;
    let index = buscaTarefa(id); // retorna o id    
    res.json(tarefas[index]);
});

app.post('/tarefas', (req, res) => {
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

    let { id } = req.params;
    let index = buscaTarefa(id); // retorna o id 
    tarefas.splice(index, 1);
    res.send(`Tarefa ${id} foi deletada.`);

});



function buscaTarefa(id) {

    return tarefas.findIndex((tarefa) => tarefa.id == id);
    // Nota : tarefa seleciona o objeto dentro da array de objetos e caso a expressão (tarefa.id == id ) for verdadeira , retorna o index da tarefa atual;
}

export default app; 