const connection = require('./conexion');
var conexion = connection

class trabajosModel{
    listar(){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * from `trabajos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarTrabajo(trabajo){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * FROM `trabajos` WHERE id_t = '+trabajo, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crear(trabajo){
        let id = '"'+trabajo.id_t+'"'
        let fecha_p = '"'+trabajo.fecha_planificada+'"'
        let fecha_i = '"'+trabajo.fecha_inicial+'"'
        let fecha_f = '"'+trabajo.fecha_final+'"'
        let estatus = '"'+trabajo.estatus+'"'
        let id_e = '"'+trabajo.id_equipo+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('INSERT INTO trabajos (id_t, fecha_planificada_t, fecha_inicio_mante_t, fecha_final_mante_t, estatus_mante_t, id_equipo_t) VALUES ('+id+', ' +fecha_p+ ', ' +fecha_i+ ', ' +fecha_f+ ', ' +estatus+ ', ' +id_e+ ')',
            function (error, results, fields){
                if(error) throw error;
                conexion.query('UPDATE equipos SET fecha_ultimo_mantenimiento_e = '+fecha_f+', id_trabajo_mantenimiento_e = '+id+' WHERE id_e = '+id_e, function(error, results, fields){
                    if(error) throw error;
                })
                console.log('*****SE HA GUARDADO EL REGISTRO*****');
                console.log(results);
                resolve(trabajo)
            }
        );
        })
    }

    actualizar(trabajo){
        let id = '"'+trabajo.id_t+'"'
        let fecha_p = '"'+trabajo.fecha_planificada+'"'
        let fecha_i = '"'+trabajo.fecha_inicial+'"'
        let fecha_f = '"'+trabajo.fecha_final+'"'
        let estatus = '"'+trabajo.estatus+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('UPDATE trabajos SET fecha_planificada_t = '+fecha_p+', fecha_inicio_mante_t = '+fecha_i+', fecha_final_mante_t = '+fecha_f+', estatus_mante_t = '+estatus+' WHERE id_t = '+id,
            function (error, results, fields){
                if(error) throw error;
                conexion.query('UPDATE equipos SET fecha_ultimo_mantenimiento_e = '+fecha_f+' WHERE id_trabajo_mantenimiento_e = '+id, function(error, results, fields){
                    if(error) throw error;
                })
                console.log('*****SE HA GUARDADO EL REGISTRO*****');
                console.log(results);
                resolve(trabajo)
            }
        );
        })
    }

    borrar(trabajo){
        let id = trabajo.id_t
        return new Promise((resolve, reject) => {
            console.log('a model');
            conexion.query('DELETE FROM trabajos WHERE id_t = '+id, 
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA BORRADO EL REGISTRO');
                console.log(results);
                resolve(trabajo)
            })
        })
    }
}

const trabajosM = new trabajosModel();
module.exports = trabajosM;