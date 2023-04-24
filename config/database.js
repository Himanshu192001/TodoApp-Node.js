const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = () =>
{
    mongoose.connect(
        "mongodb://127.0.0.1:27017/MyTodoData" , 
        {
            useNewUrlParser:true,
            useUnifiedTopology:true, 
        }
    )
    .then(()=>
    {
        console.log("Database connected successfully");
    })
    .catch(error =>
    {
        console.error(error);
        console.log(error);
        process.exit(1);
    })
   
}

module.exports=dbConnect;
