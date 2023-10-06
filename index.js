let express = require("express");
require("dotenv").config();
//import express from "express"; add type:module in packeage.json
let app = express();
//let port = process.env.PORT;
let port = 2024;
app.get("/",(req,res)=>{
    res.send("hello node !!")
})
app.get("/home",(req,res)=>{
    res.send("<div style='color:red;'>hello home page</div>")
})

app.listen(process.env.PORT,()=>{
    console.log(`node is running on port ${process.env.PORT}`)
})