function hola(nombre, miCallback){
    // console.log("Im a Asincrona function")
    setTimeout(function(){
        console.log(`Hola ${nombre}`);
        miCallback(nombre);

    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log(`adios ${nombre}`);
        otroCallback(); 
    }, 1000);
}


// --

console.log('Iniciando proceso');
hola('Baned', function(nombre){
    
    hablar(function(){
        adios(nombre, function(){
            console.log('terminando proceso');
            });
    });
   
    
});
