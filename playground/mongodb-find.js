const {MongoClient, ObjectID} = require('mongodb');
let id = new ObjectID();
console.log(id);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB sever');

  // let arr=db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log(docs);
  // },(err)=>{
  //   console.log(err);
  // });
  // let arr=db.collection('Todos').find({completed:false}).count().then((count) => {
  //   console.log(`todo count: ${count}`);
  // },(err)=>{
  //   console.log(err);
  // });

  db.collection('Users').find({name:'Andrew'}).count().then((count) => console.log(`count: ${count}`),(err)=>console.log(err))
  db.close();
});
