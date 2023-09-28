const mongoose = require("mongoose");
const URL = 'mongodb://127.0.0.1:27017/prompt_generator';


const ConnectionDB = async () => {
    // Connecting db with the help of mongoose
    await mongoose.connect(URL);
    let fetch_data = await mongoose.connection.db.collection('stories');
    let data = await fetch_data.find({}).toArray();
    global.prompt_data = data;
}

module.exports = ConnectionDB;
