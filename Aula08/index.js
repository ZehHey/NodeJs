(async ()=>{
    const db = require('./db')
    console.log('Criando tabela')
    await db.criaTabela()

    console.log('Inserindo cliente')
    await db.insereCliente({s_nome: 'Simone', i_idade:42})

    console.log('Obter os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()