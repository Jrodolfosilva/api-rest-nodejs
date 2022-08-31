const express = require("express");
const banco =[
    {
        id:1,
        name:"Rodolfo"
    },
    {
        id:2,
        name:"Rodolfo"
    }
]

const app= express();

app.use(express.json())

app.get("/",(req,resp)=>{
resp.send(
  banco
)
})
app.post("/post",(req,resp)=>{
const {id,name} = req.body
banco.push({
    id,
    name})

resp.status(200).send(
    banco
)
})

app.patch("/patch",(req,resp)=>{
    const {id,name} = req.body;

    banco.find((i)=>i.id === id)?
     resp.status(500).send("Já está cadastrado"):
     banco.push({id,
        name})&&resp.send(banco)



})

app.listen(5000)