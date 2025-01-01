const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            `mongodb+srv://krupagoyani:krupa123@krupa.vb3ly.mongodb.net/apiproject`
        );
        console.log('Connected to MongoDB');
        
    } catch (err) {
        console.error(err);
        return false;
    }
};

module.exports = connectDB() ;