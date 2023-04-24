const Todo = require("../models/Todo");

exports.updateTodo = async (req , res) =>
{
    try{
        const {title , description } = req.body;
        const {id} = req.params;
        const response = await Todo.findByIdAndUpdate(
            {_id:id }, 
            {title , description, updatedAt: Date.now()},
            {new:true}
            );
        res.status(200).json({
            status:true,
            data:response,
            message:"Todo updated successfully"
        })

    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.status(500).json({
            status:false,
            data:error.message,
            message:"something went wrong!"
        })
    }
}