const triaje = require('./datos');

function buscarID(id_usuario, callback){

    const encontrado = triaje.find((i) => i.id_usuario == id_usuario);

    if (encontrado) {
        callback(null, encontrado);
    }else{
        callback("No se encontraron registros", null);
    }
}

function imprimirEncontrado(err, res){
    if(err){
        console.log(err);
    }else{
        console.log("Registros encontrados", res)
    }
}

buscarID(1, imprimirEncontrado);