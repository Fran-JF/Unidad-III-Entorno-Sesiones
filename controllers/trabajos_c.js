var trabajosModel = require("../models/trabajos_m")

class trabajosController{
    listar(){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            trabajosModel.listar()
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    mostrarTrabajo(trabajo){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            trabajosModel.mostrarTrabajo(trabajo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    crear(trabajo){
        return new Promise ((resolve, reject)=>{
            if (!trabajo.id_t || !trabajo.fecha_planificada || !trabajo.fecha_inicial || !trabajo.fecha_final || !trabajo.estatus || !trabajo.id_equipo) {
                return resolve("No se agregó el TRABAJO, se requiere del trabajo: id, fecha_planificada, fecha_inicial, fecha_final, estatus, id_equipo.");
            }
            console.log("a controller")
            trabajosModel.crear(trabajo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    actualizar(trabajo){
        return new Promise ((resolve, reject)=>{
            if (!trabajo.id_t || !trabajo.fecha_planificada || !trabajo.fecha_inicial || !trabajo.fecha_final || !trabajo.estatus) {
                return resolve("No se actualizó el TRABAJO, se requiere del trabajo: id, fecha_planificada, fecha_inicial, fecha_final, estatus.");
            }
            console.log("a controller")
            trabajosModel.actualizar(trabajo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    borrar(trabajo){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!trabajo.id_t) {
                return resolve("Debes Ingresar la propiedad (id_t) si deseas eliminar un registro");
            }
            console.log('a controller');
            trabajosModel.borrar(trabajo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

const trabajosM = new trabajosController();
module.exports = trabajosM;