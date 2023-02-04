import express from "express";
import TarefasController from "../controllers/tarefasControllers.js";

const router = express.Router();

router.get("/tarefas",TarefasController.listarTarefas);


export default router;

