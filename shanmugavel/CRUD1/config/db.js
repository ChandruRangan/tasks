const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

client.connect()

module.exports=client;


