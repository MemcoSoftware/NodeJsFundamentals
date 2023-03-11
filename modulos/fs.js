const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        console.log(data.toString());
    })
};

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err){
        if(err){
            console.error(' could not process the text', err)
        }else{
            console.log('successfully written')
        }
    })
};


function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}
// leer(__dirname + '/archivo.txt', console.log);

// escribir(__dirname + '/archivo1.txt', 'Im a new file', console.log)
borrar(__dirname + '/archivo1.txt', console.log)