const { MongoClient, ServerApiVersion } = require ('mongodb')
const uri = 'mongodb+srv://zehheydev:5WBbbWx0ZolWDWRi@cluster0.iaiv9cl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors:true
    }
})

async function run(){
    try{
        await client.connect()
        console.log('Conectado ao banco de dados')

        const dbo = client.db('cfbcursos')
        const obj = {curso: 'Curso de JavaScript', canal:'CFB Cursos'}
        const colecao = 'cursos'
        await dbo.collection(colecao).insertOne(obj, (erro, resultado)=>{
            if (erro) throw erro           
        })
        console.log('Novo curso inserido')
    }finally{
        await client.close()
    }
}
run().catch(console.dir)