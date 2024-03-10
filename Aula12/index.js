const express = require('express')
const app = express()
const porta = process.env.PORT || 3000
const formidable = require('formidable')
const fs = require('fs')

app.get('/', (req, res)=>{
    res.send(
        '<form action="envioDeArquivo" method="post" enctype="multipart/form-data"><p><input type="file" name="filetoupload"></p><p><input type="submit" value="Enviar"</p></form>'
    )
    return res.end()
})

app.post('/envioDeArquivo', (req, res)=>{
    const form = new formidable.IncomingForm()
    form.parse(req, (erro, campos, arquivo)=>{
        
        const urlAntiga = arquivo.filetoupload[0].filepath
        console.log(urlAntiga)
        const urlNova = "C:\\Users\\Zeh Hey\\Desktop\\teste\\" + arquivo.filetoupload[0].originalFilename
        console.log(urlNova)
        fs.rename(urlAntiga, urlNova, (erro)=>{
            if(erro) throw erro
            res.send('Arquivo movido')
            res.end()
        })
        
    })
    
})
console.log('Servidor Rodando')

app.listen(porta)