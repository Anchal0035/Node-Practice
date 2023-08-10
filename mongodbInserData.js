const dbConnect=require("./mogodb");

const insertData=async ()=>{
    const db=await dbConnect();
    const result=await db.insertMany(
        [
            {name:"nord5", brand:"vivo",price:320,category:'mobile'},
            {name:"nord6", brand:"vivo",price:530,category:'mobile'}
        ]
        )
       if(result.acknowledged){
        console.log("data inserted");
       }
}
insertData();