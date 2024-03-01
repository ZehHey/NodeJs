const http = require('http')
const porta = 3000
const host = '127.0.0.1'  //se nao especificar fica o padrao 127.0.0.1

const servidor = http.createServer((request, response) =>{
    response.writeHead(200, {'Content-Type': 'text/html'})
    if(request.url == '/'){
        response.write('<h1>Seja bem vindo</h1>')
    }else if(request.url=='/canal'){
        response.write('<h1>@Zeh_Hey</h1>')
    }else if(request.url=='/curso'){
        response.write('<h1>Curso de Nodejs</h1>')
    }
    response.end()
}).listen(porta, host, ()=>{console.log('Servidor Rodando')})