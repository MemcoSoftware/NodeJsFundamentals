const { resolve } = require("path");

function hola(nombre, miCallback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`Hola ${nombre}`);
            resolve(nombre);
    
        }, 1000);
    });
    
}

function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bla bla bla bla');
            resolve(nombre);
        }, 1000);
    });
    
}

function adios(nombre, otroCallback){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log(`adios ${nombre}`);
            resolve(); 
        }, 1000);
    })
    
}

// --
console.log('iniciado el proceso');
hola('baned')
.then(hablar)
.then(adios)
.then((nombre) =>{
    console.log('terminado el proceso')
})


.catch(error =>{
    console.log("Ha habido un error");
    console.log(error);
})