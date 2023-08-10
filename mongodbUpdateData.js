const dbConnect=require("./mogodb");

const updateData=async ()=>{
    let db=await dbConnect();
    let data=await db.updateOne(
    {name:"nord5"},
    {$set:{name:"nord6"}}
    )

    console.log(data);
}
updateData();