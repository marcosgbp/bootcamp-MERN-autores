const ControladorAutor = require('../controllers/autor.controller');

module.exports = (app) => {
    app.post('/api/crearautor', ControladorAutor.crearAutor);
    app.get('/api/listarautores', ControladorAutor.listarAutores);
    app.get('/api/buscarautor/:_id', ControladorAutor.buscarAutor);
    app.put('/api/editarautor/:_id', ControladorAutor.actualizarAutor);
    app.delete('/api/eliminarautor/:_id', ControladorAutor.eliminarAutor)
}