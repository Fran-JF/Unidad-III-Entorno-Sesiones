var usuariosModel = require("../models/usuarios_m")

class usuariosController {

    listar(){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            usuariosModel.listar()
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    crear(usuario){
        return new Promise ((resolve, reject) => {
            if (!usuario.rol || !usuario.usuario || !usuario.password ) {
                return resolve("No se agregó el usuario, se requiere del usuario: usuario, rol, contraseña");
            }
            if (usuario.rol == "admin" || usuario.rol == "user") {
                console.log('a controller')
                usuariosModel.crear(usuario)
                .then((resultado)=>{
                    resolve (resultado)
                })
                .catch((err)=>{
                  reject(err)
                });
            }else{
                return resolve("El rol no coincide con los roles permitidos: admin, user")
            }
        })
    }

    login
    (usuario){
        return new Promise ((resolve, reject) => {
            if (!usuario.usuario || !usuario.password ) {
                return resolve("No se agregó el usuario, se requiere del usuario: usuario, rol, contraseña");
            }
            console.log('a controller')
            usuariosModel.login(usuario)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }
}

const usuariosC = new usuariosController();
module.exports = usuariosC