const http = require('http')
const eventos = require('events')
const EventoEmissor = new eventos.EventEmitter()


EventoEmissor.on('msg', ()=>{console.log('Mensagem de evento')})



const porta = process.env.PORT || 3000
const retorno  = (() => {console.log('Servidor Rodando')})
const servidor = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Zeh Hey')
    EventoEmissor.emit('msg')
    response.end()
})
servidor.listen(porta, retorno)
