const express=require("express");
require('./config');
const Product=require('./products');
const app=express();
const multer=require("multer");//upload files in a folder  


const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"upload")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+ ".jpg");
        }
    })
}).single("userfile")


app.post("/upload",upload,(req,res)=>{
    res.send("file uploaded");
})

app.use(express.json());
app.post("/create",async (req, res)=>{

    let data=new Product(req.body);
    let result=await data.save();
    console.log(req.body);
    res.send(result);
});

app.get("/listen",async(req,res)=>{
    let data=await Product.find();
    res.send(data);
})

app.delete("/delete/:_id",async (req,res)=>{
    console.log(req.params);
    let data=await Product.deleteOne(req.params);
    res.send(data);
})

app.put("/update/:_id",async (req,res)=>{
    console.log(req.params);
    let data=await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
        );
    res.send(data);
})

//get uaing more then 1 field
app.get("/search/:key",async(req, res)=>{
    console.log(req.params.key)
    let data=await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
            ]
        }
    )
    res.send(data);
    console.log(data);
})
app.listen(4000);