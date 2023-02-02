import app from './source/app.js'


const porta = process.env.PORT || 3000;



app.listen(porta,() => {
    // http://localhost:3000/
    console.log(`Servidor escutando em http://localhost:${porta}/`);
})



// Parar o servidor no VSCode = ctrl + c;