const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const SERVER_PORT = 5000

const taskController = require('./TaskController')

var app = express()

// applying middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Get all task resource
app.get('/api/v1.0/task',async (req,res,next) => {
        return taskController.getTask(req,res,next);
});



// create a new task
app.post('/api/v1.0/task',async (req,res,next)=>{
    return  taskController.createTask(req,res,next);
});








app.listen(SERVER_PORT,function(){
    console.log("Server is listening at port :  ",SERVER_PORT);
});


