const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if(err){
        console.log("Unable to connect to mongo db server.")
        return;
    }
    console.log("Connect to mongodb server.")
    
    //Delete Many
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((results)=>{
    //     console.log(`Deleted To Do ${results}`)
    // });
    db.collection("Todos").deleteOne({text: "Eat lunch"}).then((results)=>{
            console.log(`Deleted To Do ${results}`)
        });
    // db.close();
})