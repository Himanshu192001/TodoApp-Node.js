const mongoose = require("mongoose");

const todoSchema = new  mongoose.Schema(
    {
        title:{
            required:true,
            type:String,
            maxLength:50
        },

        description:{
            required:true,
            type:String,
            maxLength:50
        },
        createdAt:{
            type:Date,
            required:true,
            default: Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default: Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo" , todoSchema);

