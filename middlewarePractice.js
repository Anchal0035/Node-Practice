const express=require('express');
const app=express();
//Middleware -- we use middleware to authenticate an for routing so that we dont have to change things in each routing

//Application leve;l route method-- applies on all routes 
//this method is used when we want to apply the middleware on all routes
// const reqFilter=(req, res, next)=>{
// if(!req.query.age){
//     res.send("Provide age");
// }
// else if(req.query.age<18){
//     res.send("you cannot use it");
// }
// //next();//to tells when reqFilter function task is completed move forward.  If not present the control dowesnt go to next function
// else{
//     next();
// }
// }
// app.use(reqFilter);

// app.get('/',(req,res)=>{
// res.send("Welcome to Home Page")
// })

// app.get('/users',(req,res)=>{
//     res.send("Welcome to Users Page")
//     })

// app.listen(5000);

//route level middleware -- aplied on one or on more then one that is on required routes 
//this method is used when we want to apply middleware on specific routes 

// const reqFilter=(req, res, next)=>{
//     if(!req.query.age){
//         res.send("Provide age");
//     }
//     else if(req.query.age<18){
//         res.send("you cannot use it");
//     }
//     //next();//to tells when reqFilter function task is completed move forward.  If not present the control dowesnt go to next function
//     else{
//         next();
//     }
//     }
//     //app.use(reqFilter);
    
//     app.get('/',reqFilter,(req,res)=>{
//     res.send("Welcome to Home Page")
//     })
    
//     app.get('/users',(req,res)=>{
//         res.send("Welcome to Users Page")
//         })
    
//     app.listen(5000);

//when middleware is in different file 
// const reqFilter=require('./middleware');

//  app.get('/',reqFilter,(req,res)=>{
//     res.send("Welcome to Home Page")
//     })
    
//     app.get('/users',(req,res)=>{
//         res.send("Welcome to Users Page")
//         })
    
//     app.listen(5000);

//another way of applying middleware on specific routes  basically when we have hundreds of roud that need middleware
const reqFilter=require('./middleware');
const route=express.Router();
route.use(reqFilter);
 route.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
    })
    
    app.get('/users',(req,res)=>{
        res.send("Welcome to Users Page")
        })

        app.use('/',route);
    
    app.listen(5000);
