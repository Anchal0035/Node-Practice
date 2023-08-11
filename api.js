const express=require("express");
const mongodb=require("mongodb");
const dbConnect=require("./mogodb");
const app=express();

app.use(express.json());

app.get('/',async (req,res)=>{
    let db=await dbConnect();
    let data=await db.find().toArray();
    res.send(data)
});

app.post('/',async (req,res)=>{
    let db=await dbConnect();
    let data=await db.insertOne(req.body);
});

app.put('/:name',async (req, res)=>{
    let db=await dbConnect();
    let data=db.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send({data:"updated"})
});
app.put('/',async (req, res)=>{
    let db=await dbConnect();
    let data=db.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    res.send({data:"updated"})
});

app.delete('/:id',async (req, res)=>{
    let db=await dbConnect();
    let data=await db.deleteOne(
        {_id:new mongodb.ObjectId(req.params.id)},
       
    )
    console.log(data);
    res.send(data)
});

app.listen(5000);