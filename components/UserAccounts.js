const mongoose = require('mongoose');
var mongobd = require('mongodb');
var ObjectId = require('mongodb').ObjectId; 

const connectionString = 'mongodb+srv://Logan:302012Lh@atlascluster.mc1zlf4.mongodb.net/RecipeRealm';
mongoose.connect(connectionString, {UseUnifiedTopology: true, UseNewUrlParser: true});


connection.once("open", () =>{
    console.log("Mongoose connected");
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    allergens: [String]
},{collection: "Users"});
const User = mongoose.model('Users', userSchema);

exports.dal = {
registerUser: function(username, password, email, allergens){
    let newUser = [
        {
            ID: new mongoose.Types.ObjectId,
            Username: username, Password: password, Email: email, allergens: allergens
        }
    ];
    User.insertMany(newUser);
}
}
