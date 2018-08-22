const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if(err){
        console.log("Unable to connect to mongo db server.")
        return;
    }
    console.log("Connect to mongodb server.")
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //        return console.log("Unable to insert.", err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection("Users").insertOne({
        name: "Saurabh Abhyankar",
        age: 25,
        location: "India"
    }, (err, results)=>{
        if(err){
            return console.log("Unable to insert Users.", err)
        }
        console.log(JSON.stringify(results.ops[0]._id.getTimestamp(), undefined, 2));
    })
    db.close();
})