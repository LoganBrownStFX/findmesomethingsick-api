const connect = require('../connection');


const moviesDAO = {
    findRandomMovie: (searchParam, callback) => {
        connect((err , client) => {
            if(err){
                return {error: err, items:[]}
            } else {
                const collection = client.db('SMDB').collection("Movies");
                if(searchParam){
                    collection.aggregate([
                        { $match: searchParam },
                        { $sample: { size: 1 } }
                    ]).toArray((err, items) => {
                        callback(items);
                    })
                } else {
                    collection.aggregate([
                        { $sample: { size: 1 } }
                    ]).toArray((err, items) => {
                        callback(items);
                    })
                }
                
            }
        })
    }
}

module.exports = moviesDAO;