//steps to connet mongodb to node js

//1---install and import mongodb
//2--create url of localhost of mongodb to connect
//3--tell to use url as client 
//4--create function
   //4(1)--use connet() function to connect mongodb
   //4(2)--tell the requied db to use
   //4(3)--tell the requied collection to use
   //4(4)--do required work

//5--call function


const dbConnect=require("./mogodb");

//handle promise function without creating another function
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })

// })

//2nd method

const getData=async ()=>{
    let Data=await dbConnect();
    let data=await Data.find().toArray();
    console.log(data);
}
getData();


