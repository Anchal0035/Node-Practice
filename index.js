
//use another js file 
// const app=require('./app')

// console.log(1);
// console.log(app);
// console.log(app.z());
// console.log(app.x);

//filter function
// const arr=[2,4,7,1,3,8,3]

// arr.filter((item)=>{
//     console.log(item)
// })

// let result=arr.filter((item)=>{
//     return item>3
// })

// console.log(result)

//Non-Global Modeule 
// const fs=require('fs');
// fs.writeFileSync('hello.txt','hii hello')


//http module - creating server 

// const http=require('http');

// http.createServer((req, res)=>{
//     res.write("hello, there");
//     res.end();

// }).listen(5000);


//Colors module 
// const colors=require('colors');
// console.log("hello".red);
// console.log("hello.txt".red);

//chalk package 
// const chalk = require('chalk');

// console.log(chalk.blue('Hello world!, hiiiii'));


//nodemon use

//11-Api (basic)
// const http=require('http');
// const data=require('./data.js')
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application\json'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(4000);


//add, delete using input in console 
// const input =process.argv;
// const fs=require('fs');
// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4]);

// }
// else if(input[2]=='remove'){
// fs.unlinkSync(input[3]);
// }
// else{
//     console.log("Invalid input");
// }

//Create multiple files using a loop inside a specific folder
// const path=require('path');
// const fs=require('fs');
// const dirpath=path.join(__dirname,'files');
// for(i=0;i<4;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt",'hello'+i);

// }
// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("File Name"+item);

//     })

// })


//CRUD in file inside CRUD folder
// const path=require('path');
// const fs=require('fs');
// const dirpath=path.join(__dirname,'CRUD');
// const filepath=`${dirpath}/App.txt`;
//Create
// fs.writeFileSync(filepath,"this is app");
//Read
// fs.readFile(filepath,'utf8',(err, item)=>{
//     console.log(item);

// })
//update content inside the file
// fs.appendFile(filepath," and conteain info about app",(err)=>{
//     if(!err) console.log("file content Updated"); 
// })

//update file name 
// fs.rename(filepath,`${dirpath}/Node.txt`,(err)=>{
//     if(!err) console.log("File name updated ");
// })
//delete file 
// fs.unlinkSync(`${dirpath}/Node.txt`);

//Asynchronous function
//  let a=20;
//  let b=0;
//  setTimeout(()=>{
//     b=20;
//  },2000)

//  console.log(a+b);
 //drawback of async property as we want result as 40 but got 20

//resolve async drawback by using Promise function 
// let a=20;
// let b=0;
// let Waitingdata=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(20);
//      },2000)
// })

// Waitingdata.then((b)=>{
//     console.log(a+b);
// })

//Express package
// const express=require('express');
// const app=express();
// //link pages
// app.get('',(req,res)=>{

//     console.log("data coming from client side ",req.query.name);
//     res.send(`"hello "
//     <a href="/about">Go to about page</a>
//     `);
// })
// //Send Html data 
// app.get('/About',(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="Username" value=${req.query.name} />
//     <button>Submit</button>
//     `);
// })
// //Sendd JSON data 
// app.get('/Help',(req,res)=>{
//     res.send([
//         {
//             name:"Anchal",
//             email:"anchal@gmail.com"
//         },
//         {
//             name:"Abc",
//             email:"Abc@gmail.com"
//         }

//     ]);
// })
//  app.listen(5000)

//Make html page 
const express=require('express');
const path=require('path');
const app=express();
const pubPath=path.join(__dirname,'public');
app.set('view engine', 'ejs');

//app.use(express.static(pubPath));// to access static pages 
app.get('',(req,res)=>{
    res.sendFile(`${pubPath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${pubPath}/about.html`)
})

//dynamic Page
app.get('/profile',(req,res)=>{
    const user={
        name:"Anchal",
        email:"anchal2gmail.com",
        city:"Noida",
        skills:["node", "java", "c"]
    }
    res.render('profile',{user});
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('*',(req,res)=>{
    res.sendFile(`${pubPath}/404.html`)
})
app.listen(5000);

