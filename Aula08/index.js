(async ()=>{
    const db = require('./db')

    console.log('Inserindo cliente')
    await db.insereCliente({s_nome: 'Luiza', i_idade:16})

    console.log('Obter os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()