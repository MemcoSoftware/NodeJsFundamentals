function function1(){
    console.group('funcion 1');
    console.log('This is from function 1')
    funcion2();
    console.log('We are back to 1')
    console.groupEnd('funcion 1');
}


function funcion2(){
    console.group('funcion 2');
    console.log('This is from function 2')
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
function1()