const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const ProductSch = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});
const ProductMod = mongoose.model('products', ProductSch);
const InsertInDB = async () => {
    
    let data = new ProductMod(
        {
            name: "abc",
            price: 10,
            brand: "xyz",
            category: "fgh"
        });
    let result = await data.save();
    console.log(result);
}

const UpdateInDB = async () => {
    const ProductMod = mongoose.model('products', ProductSch);
    let data = await ProductMod.updateOne(
        { name: "abc" },
        {
            $set: { price: 30 }
        }
    )
    console.log(data);
}

const deleteInDB= async()=>{
    const ProductMod = mongoose.model('products', ProductSch);
    let data=await ProductMod.deleteOne({
        price:10
    })
console.log(data);
}

const finInDB= async()=>{
    const ProductMod = mongoose.model('products', ProductSch);
    let data=await ProductMod.find();
console.log(data);
}

finInDB();