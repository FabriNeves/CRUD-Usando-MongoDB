import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Usuario1:1234@to-do-list.xgrmd7m.mongodb.net/Tarefas");

// mongoose.connect("mongodb+srv://alura:123@alura.dkjed.mongodb.net/alura-node");
// mongodb+srv://Usuario1:<password>@to-do-list.xgrmd7m.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect("mongodb+srv://Usuario23:2023@cluster0.svrhizr.mongodb.net/To-do-list"
let db = mongoose.connection

export default db;