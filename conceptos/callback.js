function hola(nombre, miCallback){
    // console.log("Im a Asincrona function")
    setTimeout(function(){
        console.log(`Hola ${nombre}`);
        miCallback();

    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log(`adios ${nombre}`);
        otroCallback(); 
    }, 1000);
}

console.log('Iniciando proceso');
hola('Baned', function(){
    adios('Baned', function(){
    console.log('terminando proceso');
    })
    
});
