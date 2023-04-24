const Todo = require("../models/Todo"); // getting the schema from the models


// created a route handler for the
exports.createTodo = async (req , res) =>
{
    try{
        //getting title and description from the request body
        const {title , description} = req.body;
        // connecting with the database and adding the properties getting from the body 
        const response = Todo.create({title , description});
        // sending the response to the frontend
        res.status(200).json(
            {
                success:true,
                data:response ,// response message getting from the database
                message: "Entry created successfully"
            }
        )
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message,
            data:"Internal server error"
        })
    }
}
