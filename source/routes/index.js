import  express  from "express";
import tarefas from "./tarefasRoutes.js";


const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"Lista de Tarefas"});
    })

    app.use(
        express.json(),
        tarefas
    )
}

export default routes;
