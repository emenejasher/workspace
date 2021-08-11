const mongoose = require("mongoose");

async function dbConfig() {
    try{
        await mongoose.connect(process.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConfig;