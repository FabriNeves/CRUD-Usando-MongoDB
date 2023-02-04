import tarefas from "../models/Tarefas.js";


class tarefasController  {
    static listarTarefas = (req,res ) => {
        tarefas.find((err,tarefas) => {
            res.status(200).json(tarefas);
        })
    }
}

export default tarefasController;