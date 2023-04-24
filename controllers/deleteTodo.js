const Todo = require("../models/Todo");

exports.deleteTodo = async (req , res) => 
{
    try 
    {
        const {id} = req.params;
        const response = await Todo.deleteOne({_id:id});
        
        res.status(200).json({
            status:true,
            data:response,
            message:"Todo deleted successfully"
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