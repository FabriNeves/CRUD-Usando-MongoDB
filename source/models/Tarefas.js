import mongoose from "mongoose";

const tarefasSchema = new mongoose.Schema(
    {
         id: {type:String}, 
         tarefa:{type:String,required:true},
         dataDeCriação:{type:Date,required:true},
         concluido:{type:Boolean,required:true}
    }
);

const tarefas = mongoose.model("Tarefas",tarefasSchema);
      // Cria o Tarefas.tarefas ; 
export default tarefas;