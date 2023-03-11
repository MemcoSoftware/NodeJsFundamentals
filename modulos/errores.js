function otherFunction(){
    serompe;
};

function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){

        try {
            return 3 + z;
        } catch(err){
            console.error('Error en mi función asincrona')
            cb(err);
        }
        
    })
};

try{
    seRompeAsincrona(function(err){
        console.log(err.message);
    });
} catch(err){
    console.error('Something went wrong...');
    console.error(err);
    console.log('Pero no pasa nada lo hemos capturado')
}


console.log('Esto de aqui esta al final');