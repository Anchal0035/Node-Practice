const express=require("express");
const app=express();

app.use(express.json());

app.post("/add",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    c=a+b;
    res.send(JSON.stringify(c));

});
app.post("/divide",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    c=a/b;
    res.send(JSON.stringify(c));

});
app.post("/sub",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    c=a-b;
    res.send(JSON.stringify(c));

});
app.post("/multiply",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    c=a*b;
    res.send(JSON.stringify(c));

});

app.listen(5000);
