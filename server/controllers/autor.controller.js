const Autor = require("../models/autor.model");

//Crear Autor
const crearAutor = (req, res) => {
    Autor.create(req.body)
    .then((resultado)=> {
        console.log(resultado);
        res.json(resultado);
    }).catch((error)=>{
        res.status(400).json(error)
    })
}
//Listar Autores
const listarAutores = (req, res) => {
    Autor.find(req.body).sort({name:1})
    .then((resultado)=> {
        console.log(resultado);
        res.json(resultado)
    }).catch((error)=> {
        console.log("Error al querer listar autores...");
    })
}
//buscar un autor
const buscarAutor = (req, res) => {
    Autor.findById({_id:req.params._id}, req.body)
    .then((resultado)=> {
        console.log(resultado);
        res.json(resultado);
    }).catch((error)=> {
        console.log("Server: error al buscar un autor");
        res.json(error)
    })
}

//actualizar autor
const actualizarAutor = (req, res) => {
    Autor.updateOne({_id:req.params._id}, req.body)
    .then((resultado)=> {
        console.log(resultado);
        res.json(resultado);
    }).catch((error)=>{
        console.log("Server: Error al querer actualizar")
    })
}

//eliminar autor
const eliminarAutor = (req, res) => {
    Autor.deleteOne({_id:req.params._id})
    .then((resultado)=>{
        console.log(resultado);
        res.json(resultado)
    }).catch((error)=>{
        console.log("Server: Error al querer eliminar el autor")
    })

}

module.exports = {
    crearAutor,
    buscarAutor,
    listarAutores,
    actualizarAutor,
    eliminarAutor
}