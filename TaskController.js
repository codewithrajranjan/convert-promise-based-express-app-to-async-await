module.exports = {

    getTask : async function(req,res,next){

        try {

            var result = await fetchTaskFromDatabase();
            res.status(200)
            return res.json(result)

        }catch(err){
            res.status(500)
            res.json(err)
        }
    
    },
    createTask : async function(req,res,next){
        const taskData = req.body
        console.log(taskData)
        try {
            var result = await  createTaskInDatabase()
            res.status(200)
            return res.json(result)
         
        }catch(err){
            res.status(500)
            return res.json(err)
         

        }
        
    }
}


function fetchTaskFromDatabase(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            data = [

                        {   "message" : "this is task 1","createdBy" : "John Doe"},
                        {   "message" : "this is task 2","createdBy" : "Peter"}
            ]
            resolve(data)
        },2000);
    });
}

function createTaskInDatabase(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            data = {   "message" : "task successfull created", "code" : "success"}
            resolve(data)
        },2000);
    });
}
