var express = require('express');
var trabajosRouter = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
var trabajosController =require('../controllers/trabajos_c');

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
trabajosRouter.use(express.json());

/* Metodo GET */
trabajosRouter.get(
  '/',      function(req, res, next){
    roles = ["user", "admin"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
  trabajosController.listar()
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* Metodo GET */
trabajosRouter.get(
  '/:id',      function(req, res, next){
    roles = ["user", "admin"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let trabajo = req.params.id
  trabajosController.mostrarTrabajo(trabajo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* POST users listing. */
trabajosRouter.post(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let trabajo = req.body;
  trabajosController.crear(trabajo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* PUT users listing */
trabajosRouter.put(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let trabajo = req.body;
  trabajosController.actualizar(trabajo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* DELETE users listing */
trabajosRouter.delete(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let trabajo = req.body;
   trabajosController.borrar(trabajo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = trabajosRouter;