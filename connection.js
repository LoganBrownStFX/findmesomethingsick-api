const mongodb = require("mongodb");
const db_string = process.env.MONGODB_URI

module.exports = (callback) => {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(db_string,callback);
}