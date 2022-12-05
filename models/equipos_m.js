const connection = require('./conexion');
var conexion = connection

class equiposModel {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * from `equipos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarEquipo(equipo){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT `id_e`, `nombre_e`, `descripcion_e`, `serial_e`, `fecha_puesta_marcha_e`, `fecha_puesta_marcha_mante_e`, `fecha_ultimo_mantenimiento_e`, `id_trabajo_mantenimiento_e` FROM `equipos` WHERE id_e = '+equipo, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crear(equipo){
        let nombre = '"'+equipo.nombre_e+'"'
        let descripcion = '"'+equipo.descripcion_e+'"'
        let serial = '"'+equipo.serial_e+'"'
        let fecha_pm = '"'+equipo.fecha_inicial_e+'"'
        let fecha_pmm = '"'+equipo.fecha_puesta_marcha_mante_e+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('INSERT INTO equipos (nombre_e, descripcion_e, serial_e, fecha_puesta_marcha_e, fecha_puesta_marcha_mante_e) VALUES (' +nombre+ ', ' +descripcion+ ', ' +serial+ ', ' +fecha_pm+ ', ' +fecha_pmm+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(equipo)
            }
        );
        })
    }

    actualizar(equipo){
        let id = equipo.id_e
        let nombre = '"'+equipo.nombre_e+'"'
        let descripcion = '"'+equipo.descripcion_e+'"'
        let serial = '"'+equipo.serial_e+'"'
        let fecha_pm = '"'+equipo.fecha_inicial_e+'"'
        let fecha_pmm = '"'+equipo.fecha_puesta_marcha_mante_e+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('UPDATE equipos SET nombre_e = '+nombre+', descripcion_e = '+descripcion+', serial_e = '+serial+', fecha_puesta_marcha_e = '+fecha_pm+', fecha_puesta_marcha_mante_e = '+fecha_pmm+' WHERE id_e = '+id,
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA ACTUALIZADO EL REGISTRO', results);
                resolve(equipo)
            });
        })
    }

    borrar(equipo){
        let id = equipo.id_e
        return new Promise((resolve, reject) => {
            console.log('a model');
            conexion.query('DELETE FROM equipos WHERE id_e = '+id, 
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA BORRADO EL REGISTRO', results);
                resolve(equipo)
            })
        })
    }
}

const equiposM = new equiposModel();
module.exports = equiposM; 