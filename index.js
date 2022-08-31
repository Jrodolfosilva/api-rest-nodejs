const { json } = require("express");
const express = require("express");

const app= express();

app.head(json())

app.get("/",(req,resp)=>{

})