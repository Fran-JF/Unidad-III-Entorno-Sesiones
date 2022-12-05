const express = require('express');
const usuariosRouter = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
const usuariosController =require('../controllers/usuarios_c');


usuariosRouter.use(express.json());

usuariosRouter.get(
  '/',     function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
    function(req, res, next) {
    usuariosController.listar()
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

usuariosRouter.post(
  '/registrar',      function(req, res, next){
    roles = ["admin"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    let usuario = req.body;
  usuariosController.crear(usuario)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

usuariosRouter.post(
    '/login', 
    function(req, res, next) {
      let usuario = req.body;
    usuariosController.login(usuario)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
  });

/*usuariosRouter.put(
  '/', 
  function(req, res, next) {
    let usuario = req.body;
  usuariosController.actualizar(usuario)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

usuariosRouter.delete(
  '/', 
  function(req, res, next) {
    let usuario = req.body;
  usuariosController.borrar(usuario)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});*/

module.exports = usuariosRouter