function getUsuarioSync(id){

    let usuario = {
        id: id,
        nombre: `Usuario ${id}` // 'Usuario ' + id
    }

    let startPoint = new Date().getTime();
    while(new Date().getTime() - startPoint <= 3000){

    }
    
    return usuario;

    /* setTimeout(() => {
        return usuario;
    }, 3000); */

}

function getUsuario(id, callback_Funcion){

    //console.log("Entro en la funcion getUsuario")

    let usuario = {
        id,
        nombre: `Usuario ${ id }`
    }

    setTimeout(() => {
        //console.log("Entro en el TimeOut")
        callback_Funcion(usuario)
    }, 3000);

    //console.log("Salio de la funcion getUsuario")
}

module.exports = {
    getUsuarioSync,
    getUsuario
}


//prueba
