const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://zehheydev:5WBbbWx0ZolWDWRi@cluster0.iaiv9cl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(uri)
const colecao = 'cursos'
async function run(){
    try{
        await client.connect()
        console.log('conectado ao banco de dados')

        const dbo = client.db('cfbcursos')
        const res = await dbo.collection(colecao).find({}).toArray()
        
        console.log(res.map(item=>{
            return{
                curso: item.curso,
                canal: item.canal
            }
        }))
    }finally{
        await client.close()
    }
}
run().catch(console.dir)