const express=require("express");
const app=express();

app.use(express.json());

app.post("/calc",(req,res)=>{
    console.log(req.body);
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let op=req.body.op;
    console.log(req.body.op);
    switch(op) {
        case "+":
            c=a+b;
          break;

        case "-":
          c=a-b;
          break;
         
        case "*":
          c=a*b;
          break;
        case "/":
          c=a/b;
          break;
        default:
          c="Invalid"
      }
     
      res.send(JSON.stringify(c));
})

app.listen(5000);