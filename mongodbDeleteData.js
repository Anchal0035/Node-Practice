const dbConnect=require("./mogodb");

const deleteData=async ()=>{
    let db=await dbConnect();
    let data= await db.deleteOne(
        {name:"U10"}
    )
    console.log(data);
}
deleteData();