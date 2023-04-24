const express = require("express");
const router = express.Router(); 

//import the route handler(controller)
const {createTodo} = require('../controllers/createTodo.js');
const {getAllTodo} = require('../controllers/getTodoList');
const {getTodo} = require("../controllers/getTodoList");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define all the api route 
router.post("/createTodo" , createTodo);
router.get("/getTodos",getAllTodo);
router.get("/getTodo/:id" , getTodo);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deleteTodo);
 // path is connected to the route handler(controller)

module.exports = router





