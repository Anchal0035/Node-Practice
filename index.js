const express=require("express");
const fs=require("fs");
const path=require('path');
const app=express();
const multer=require("multer");
app.use(express.json());
var i=1;
var rr="";
const dirpath=path.join(__dirname,'upload');
const dirpath2=path.join(__dirname,'backup');
const filepath1=`${dirpath}/userfile-1.txt`;
const filepath2=`${dirpath}/userfile-2.txt`;


const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"upload")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+ "-" + i++ +".txt");
        }
    })
}).any("userfile");

app.post("/upload",upload,(req,res)=>{
    res.send("file uploaded");

        var rr="";
        fs.readFile(filepath1,'utf8', (err, item)=>{
   
            rr=(rr+item);
            console.log(rr);
        })
        fs.readFile(filepath2,'utf8', (err, item)=>{
       
            rr=(rr+item);
            console.log(rr);
            fs.writeFileSync(`${dirpath2}/new.txt`,rr);
        })

       

})


app.listen(5000);

