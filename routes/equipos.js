var express = require('express');
var equiposRouter = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
var equiposController =require('../controllers/equipos_c')

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
equiposRouter.use(express.json());

/* GET users listing. */
equiposRouter.get(
  '/',    function(req, res, next){
    roles = ["user","admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
  equiposController.listar()
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* GET users listing. */
equiposRouter.get(
  '/:id',    function(req, res, next){
    roles = ["user","admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let equipo = req.params.id
  equiposController.mostrarEquipo(equipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});


/* POST users listing. */
equiposRouter.post(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let equipo = req.body;
  equiposController.crear(equipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* PUT users listing */
equiposRouter.put(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let equipo = req.body;
  equiposController.actualizar(equipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

/* DELETE users listing */
equiposRouter.delete(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let equipo = req.body;
  equiposController.borrar(equipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = equiposRouter;
