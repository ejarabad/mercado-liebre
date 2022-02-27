const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});
//Ruta Para asignar el home en el servidor
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
//Ruta para asignar el registro al servidor
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
//Ruta para asignar el login al servidor
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

//Ruta para ir desde el registro al home
app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
})
//Ruta para ir desde el login al home
app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
})