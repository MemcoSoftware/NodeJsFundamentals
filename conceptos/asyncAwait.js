const { resolve } = require("path");

async function hola(nombre, miCallback){
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


async function main(){
    let nombre = await hola('Baned');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso')
}

console.log('Se empieza el proceso')
main();

