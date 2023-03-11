function asincrona(callback){
    setTimeout(function(){
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(e){
            callback(e);
        }
    }, 1000);
}

asincrona(function(err, dato){
    if(err) {
        console.error('We ve got an error');
        console.error(err);
        return false;
        // throw err; NO FUNCIONA EN ASYNC
        
    }

    console.log(`Todo ha ido bien mi dato es ${dato}`)
});


