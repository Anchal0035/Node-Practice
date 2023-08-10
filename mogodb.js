
const  {MongoClient} =require('mongodb');
//Or const MongoClient  =require('mongodb').MongoClient;


const url = 'mongodb://127.0.0.1:27017';
//const url='mongodb://localhost:27017';//mongodb path//not working in my laptop 
const client=new MongoClient(url);//tell mongodb use url

async function dbConnect(){
    let result=await client.connect();//Connect to MongoDB using a url
    let db=result.db('e-comm');//telling the required db to use
    return db.collection('products');//use require collection
   
}

module.exports=dbConnect;