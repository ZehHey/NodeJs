const conectar = async()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql= require('mysql2/promise')
    const con = mysql.createConnection('mysql://root:Guitarra13121990@localhost:3306/cursonode')
    console.log('Conectado ao banco')
    global.conexao = con
    return con
}
const criaTabela = async()=>{
    const con = await conectar()
    await con.query(`CREATE TABLE IF NOT EXISTS clienteS_node (
        i_id INT PRIMARY KEY AUTO_INCREMENT,
        s_nome VARCHAR(30),
        i_idade INT(2))`)
    
}

const todosClientes = async()=>{
    const con = await conectar()
    const  [linhas] = await con.query('SELECT * FROM clientes_node')
    return await linhas
}

const insereCliente = async(cliente)=>{
    const con = await conectar()
    const sql = 'INSERT INTO clientes_node (s_nome, i_idade) VALUES (?, ?)'
    const valores = [cliente.s_nome, cliente.i_idade]
    await con.query(sql, valores)
}

const atualizaCliente = async(id, cliente)=>{
    const con = await conectar()    
    const sql = 'UPDATE clientes_node SET s_nome=?, i_idade=? WHERE i_id=?'
    const valores = [cliente.s_nome, cliente.i_idade, id]
    await con.query(sql, valores)
}

const deletarCliente = async(id)=>{
    const con = await conectar()    
    const sql = 'DELETE FROM clientes_node WHERE i_id=?'
    const valores = [id]
    await con.query(sql, valores)
}

module.exports = {criaTabela, todosClientes, insereCliente, atualizaCliente, deletarCliente}
