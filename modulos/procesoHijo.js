const { exec, spawn } = require('child_process');


// exec('node modulos/consola.js', (err, stout, sterr) =>{
//     if (err){
//         console.error(err);
//         return false;
//     }

//     console.log(stout);
// })


let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('esta muerto?')
    console.log(process.killed);
    console.log(dato.toString())
});

proceso.on('exit', function(){
    console.log('process ended');
    console.log(proceso.killed);
})