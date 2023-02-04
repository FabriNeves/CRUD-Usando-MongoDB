import express from "express";
import tarefasController from "../controllers/tarefasControllers.js";


const router = express.Router();

router.get("/tarefas",tarefasController.listarTarefas);
router.post("/tarefas",tarefasController.cadastrarTarefa);
router.put("/tarefas/:id",tarefasController.atualizarTarefa);
router.get("/tarefas/:id",tarefasController.listarTarefasPorId);
router.delete("/tarefas/:id",tarefasController.excluirTarefa);
//router.post

export default router;

//  => index.js 
