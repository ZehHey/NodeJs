const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {
        "Content-Type": 'text/plain'
    });
    response.write('|Zeh Hey|\nPrimeiro servidor criado!\nUhuuul!!');
    response.end();
}).listen(8080);