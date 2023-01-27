const mongoose = require('mongoose');

const SchemaAutor = mongoose.Schema({
        name: {
            type:String,
            required:[true, " Por favor agrega un nombre "],
            minLength:[3, " El nombre debe de ser mayor a 3 caracteres"]
        }
});

const Autor = mongoose.model("Autores", SchemaAutor);
module.exports = Autor;