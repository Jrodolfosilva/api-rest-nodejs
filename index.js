const express = require("express");
const banco =[
    {
        id:"1",
        name:"Rodolfo"
    },
    {
        id:"2",
        name:"Rodolfo"
    }
]

const app= express();

app.use(express.json())

app.get("/",(req,resp)=>{
resp.send(
  banco
)
});

app.post("/post",(req,resp)=>{

    const {id,name} = req.body
    if(banco.find((pes)=>pes.name === name || pes.id === id)){
        resp.status(500).send("Usuario já existe")
    }
    else{
        banco.push({
        id,
        name})
        resp.status(200).send("Cadastrado com sucesso!!")
    }
});


app.patch("/patch",(req,resp)=>{

const {id,name} = req.body;
if(!banco.find((pes)=>pes.id === id)){
    resp.status(404).send("Dado não encontrado")
}

const pessoa = banco.find((pes)=>pes.id === id)

pessoa.id = pessoa.id
pessoa.name = name? name: pessoa.name
resp.status(200).send("Atualizado!!")
/*fazer a lógica da atualização
verificar se tem id no banco e tem atualizar o name
se não retornar erro*/


})


app.listen(5000)