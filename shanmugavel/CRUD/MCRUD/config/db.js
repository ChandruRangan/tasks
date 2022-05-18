

const {MongoClient} = require('mongodb');                                               //cls

const url = "mongodb://localhost:27017/" ;

const client = new MongoClient(url);                                                 //c - - init obj

client.connect()

module.exports=client.db('SHANMUGAVEL');

  