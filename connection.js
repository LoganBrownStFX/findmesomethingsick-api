const mongodb = require("mongodb");
const db_string = "mongodb+srv://admin:admin@cluster0-vzxp1.mongodb.net/test?retryWrites=true&w=majority";

module.exports = (callback) => {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(db_string,callback);
}