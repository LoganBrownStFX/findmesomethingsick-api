const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
module.exports = (callback) => {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(process.env.MONGODB_URI,callback);
}