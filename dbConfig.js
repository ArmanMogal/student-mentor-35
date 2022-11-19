const mongodb = require("mongodb");
const dbName = 'student-mentor';
const dbUrl=`mongodb+srv://ArmanMogal:Arman009@arman.psqzpfi.mongodb.net/?retryWrites=true&w=majority`;
const MongoClient = mongodb.MongoClient;

module.exports={mongodb,dbName,MongoClient,dbUrl};