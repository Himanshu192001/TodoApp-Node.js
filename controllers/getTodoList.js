// import the models 
const Todo = require('../models/Todo');
const mongoose = require('mongoose');

exports.getAllTodo = async (req , res ) =>
{
    try{
        const getAllTodo = await Todo.find({});
        res.send(500).json({
            status : true, 
            data : getAllTodo,
            message : "Data fetched successfully"
        })
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.send(500).json({
            status: false,
            data : error.message ,
            message : "Internal server error "
        })
    }
}