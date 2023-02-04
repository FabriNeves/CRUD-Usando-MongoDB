import tarefas from "../models/Tarefas.js";


class tarefasController {

    static listarTarefas = (req, res) => {
        tarefas.find((err, tarefas) => {
            res.status(200).json(tarefas);
        })
    }

    static listarTarefasPorId = (req,res) => {
        const id = req.params.id;
        tarefas.findById(id,(err,tarefa) =>{
            if(err){
                res.status(400).send({message : `${err.message} - Id não localizada.`})
            }else {
                res.status(200).send(tarefa);
            }
            
        })
    }
    static cadastrarTarefa = (req, res) => {
        let tarefa = new tarefas(req.body);

        tarefa.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Erro ao cadastrar nova tarefa.` })
            } else {
                res.status(201).send(tarefa.toJSON());

            }
        }
        )
    }

    static atualizarTarefa = (req, res) => {
        const id = req.params.id;
        //console.log(id);
        tarefas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso" });
            } else {                
                res.status(500).send({ message: err.message });

            }
        })
    }

    static excluirTarefa = (req,res) => {
        const id  = req.params.id;
        tarefas.findByIdAndDelete(id,(err) =>{
            if(err) {
                res.status(500).send({message:err.message});
            }else {
                res.status(200).send({message:`Livro removido ${id}`});
            }
        })
    }
}


export default tarefasController;

//  = > tarefasRoutes.js