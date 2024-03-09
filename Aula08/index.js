(async ()=>{
     const db = require('./db')
    
    // console.log('Criando tabela')
    // await db.criaTabela()

    // console.log('Inserindo cliente')
    // await db.insereCliente({s_nome: 'Simone', i_idade:42})
    
    // let id = 2
    // let nom = 'José Carlos'
    // let ida = 33
    // console.log('Atualizando cliente')
    // await db.atualizaCliente(id,{s_nome:nom,i_idade:ida})
    // console.log('Cliente ' + id + 'atualizado')
    
    let id = 1
    await db.deletarCliente(id)
    console.log('Cliente ' + id + 'deletado')

    console.log('Obter os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()