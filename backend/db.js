// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://cvsainath9866:Drewff1234@cluster0.l9hqohb.mongodb.net/paytm-app")
//mongodb+srv://cvsainath9866:Drewff1234@cluster0.l9hqohb.mongodb.net/

//const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://cvsainath9866:Drewff1234@cluster0.l9hqohb.mongodb.net/paytm-app', { 
//     serverSelectionTimeoutMS: 30000 // Increase timeout if necessary
//   });
// Create a Schema for Users

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});




const User = mongoose.model('User', userSchema);

module.exports = {
	User
};