const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('nueva petición');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;

            default:
                res.write('Error 404: could not load');
                res.end();
    }

    // res.write(' Hi I already know how to use httpp of node Js');

    // res.writeHead(201,{'Content-Type': 'text/plain'});

    // res.end();
}

console.log("listening http in the port 3000")