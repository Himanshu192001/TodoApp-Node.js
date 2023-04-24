const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./config/database');

//import route for todo api
const todoRoutes = require('./routes/todo');

//middleware to parse json request body 
app.use(express.json()); // express.json() is a body parser  middleware 

//add api/v1 versioning on the apis 
app.use("/api/v1" , todoRoutes);


app.listen(process.env.PORT , () => 
{
    console.log("app started successfully");
});

//creating connection to the database 
dbConnect();

app.get('/' , (req , res)=>
{
    res.send('<h1>Welcome to the express app </h1>');
})