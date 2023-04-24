// import the models 
const Todo = require('../models/Todo');

exports.getAllTodo = async (req , res ) =>
{
    try{
        const getAllTodo = await Todo.find({});
        res.status(500).json({
            status : true, 
            data : getAllTodo,
            message : "Data fetched successfully"
        })
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.send(404).json({
            status: false,
            data : error.message ,
            message : "Internal server error "
        })
    }
}


exports.getTodo = async (req , res ) =>
{
    try{
        const {id} = req.params;
        const getTodo = await Todo.findOne({_id:id});

        if(!getTodo)
        {
            res.status(500).json({
                status : true, 
                data : getTodo,
                message : `No Todo found with this ${id}`
            })
        }

        res.status(500).json({
            status : true, 
            data : getTodo,
            message : "Data fetched successfully"
        })
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.send(404).json({
            status: false,
            data : error.message ,
            message : "Internal server error "
        })
    }
}