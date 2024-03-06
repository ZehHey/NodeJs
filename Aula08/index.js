(async () =>{
    const db = require('./db')
    console.log('Inserindo novo cliente')
    await db.insereCliente({s_nome: 'João', i_idade: 14})

    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()

