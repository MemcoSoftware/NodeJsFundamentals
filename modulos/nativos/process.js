process.on('beforeExit', () =>{
    console.log('The process will ended')
});

process.on('exit', () =>{
    console.log('The process ended');
    setTimeout(()=>{
        console.log('Its never gonna be seen');
    },0)
});

setTimeout(()=>{
    console.log('Its gonna be seen');
}, 0);

process.on('uncaughtException', (err, origen) =>{
    console.log(' We forgot to capture an error');
    console.log(err);

});

functionDoesnotexists();

console.log('if the error is not captured');