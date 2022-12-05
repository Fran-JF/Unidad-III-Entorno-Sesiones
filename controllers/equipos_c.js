var equiposModel = require("../models/equipos_m")

class equiposController {
    listar(){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            equiposModel.listar()
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    mostrarEquipo(equipo){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            equiposModel.mostrarEquipo(equipo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    crear(equipo){
        return new Promise ((resolve, reject)=>{
            if (!equipo.nombre_e || !equipo.descripcion_e || !equipo.serial_e || !equipo.fecha_inicial_e || !equipo.fecha_puesta_marcha_mante_e) {
                return resolve("No se agregó el equipo, se requiere del equipo: nombre, descripción, serial, fecha_inicial.");
            }
            console.log("a controller")
            equiposModel.crear(equipo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    actualizar(equipo){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!equipo.id_e || !equipo.nombre_e || !equipo.descripcion_e || !equipo.serial_e || !equipo.fecha_inicial_e || !equipo.fecha_puesta_marcha_mante_e) {
                return resolve("No se actualizo el equipo, se requiere del equipo: id, nombre, descripción, serial, fecha_inicial.");
            }
            console.log('a controller');
            equiposModel.actualizar(equipo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    borrar(equipo){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!equipo.id_e) {
                return resolve("Debes Ingresar la propiedad (id_e) si deseas eliminar un registro");
            }
            console.log('a controller');
            equiposModel.borrar(equipo)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

const equiposC = new equiposController();
module.exports = equiposC;