const mongoose = require("mongoose");

async function main(){
    try{
        mongoose.set("strictQuery", true);
        //LuckAdmin:m7MI1s0VjGSFK4X3
        await mongoose.connect(
            "mongodb+srv://LuckAdmin:m7MI1s0VjGSFK4X3@cluster0.nt5fr41.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("DB connect")
    }catch(error){
        console.log(`erro: ${error}`)
    }
}

module.exports = main;