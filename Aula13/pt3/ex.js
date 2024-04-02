const res = [
    {
      curso: 'Curso de Node',
      canal: 'CFB Cursos'
    },
    {
      curso: 'Curso de JavaScript',
      canal: 'CFB Cursos'
    }
  ]
const r = res.map(item=>{
    return{
        curso: item.curso,
        canal: item.canal
    }
})

  console.log(r)