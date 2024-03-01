const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        fs.appendFile('teste.txt', 'Novo arquivo, ', (err) => {
            if (err) throw err
            console.log('Arquivo criado')
            return res.end()
        })
    }
})

server.listen(porta || 3000, ()=>{console.log('Servidor Rodando ')})