const express = require("express");
const router = express.Router(); 

//import the route handler(controller)
const {createTodo} = require('../controllers/createTodo.js');
const {getAllTodo} = require('../controllers/getTodoList');

//define all the api route 
router.post("/createTodo" , createTodo);
router.get("/getTodos",getAllTodo);
 // path is connected to the route handler(controller)

module.exports = router





