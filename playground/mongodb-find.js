const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if(err){
        console.log("Unable to connect to mongo db server.")
        return;
    }
    console.log("Connect to mongodb server.")
    db.collection("Todos").find({completed: false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("Unable to fetch documents.")
    });
    // db.close();
})