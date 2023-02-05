
// Blibliotecas Importadas
import express from "express";
import db from "./config/mongoConection.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão...")); // bind = ligar , conectar.
db.once("open", () => console.log("Conexão com o banco de dados estabelecida."));

const app = express();
app.use(express.json())

routes(app);



export default app; 