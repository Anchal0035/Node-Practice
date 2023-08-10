module.exports=reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("provide age");
    }
    else if(req.query.age<18){
        res.send("you cannot use it");
    }
    else{
        next();
    }
}