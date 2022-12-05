const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require('./conexion');
var conexion = connection

crearToken = async (user) =>{
    return jwt.sign(
        {
            id: user.id_u,
            rol: user.rol_u
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        }
    )
}

class usuariosModel {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * from `usuarios`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crear(usuario){
        let usuario_u = '"'+usuario.usuario+'"'
        let rol = '"'+usuario.rol+'"'
        let password = '"'+usuario.password+'"'
        return new Promise( async (resolve, reject) => {
            console.log('a model')
            var passwordHash = await bcryptjs.hash(password, 8);
            conexion.query('INSERT INTO usuarios (rol_u, usuario_u, password_u) VALUES (' +rol+ ', ' +usuario_u+ ', "' +passwordHash+ '")',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(usuario)
            }
        );
        })
    }

    login(usuario){
        let usuario_user = '"'+usuario.usuario+'"'
        let password = '"'+usuario.password+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('SELECT * FROM `usuarios` WHERE usuario_u = '+usuario_user,
            async function (error, results, fields){
                if(error) throw error;
                console.log(results);
                if (results.length > 0) {
                    if(error) throw error;
                    const checkPassword = await bcryptjs.compare(password, results[0].password_u);
                    const tokenSession = await crearToken(results[0])
                    if (checkPassword) {
                        var data = {
                            usuario: usuario_user,
                            token: tokenSession
                        }
                        resolve(data)
                    }else{
                        resolve('Password Incorrecta')
                    }
                }else{
                    resolve('No existe el usuario')
                }
            }
        );
        })
    }
}

const usuariosM = new usuariosModel();
module.exports = usuariosM;