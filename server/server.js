const express = require('express');
const app = express();
const PORT = 8000;
const cors = require("cors");

//MIDDELWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//CORS
app.use(cors({
    origin: "http://localhost:3000"
}))

//BASE DE DATOS
require('./config/mongoose.config');

//ENRUTAMIENTOS
const RutasAutor = require('./routes/autor.routes');
RutasAutor(app);


app.listen(PORT, ()=> {
    console.log(`Corriendo el servidor en el puerto ${PORT}`)
});