const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(console.log("Db is connected")); 
}


module.exports = connectToMongo;
