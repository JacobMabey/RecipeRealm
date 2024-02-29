import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Logan:302012Lh@atlascluster.mc1zlf4.mongodb.net/RecipeRealm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    allergens: [String]
});

const User = mongoose.model('User', userSchema);

export async function registerUser(username, password, email, allergens) {
    try {
        const user = new User({
            username,
            password,
            email,
            allergens
        });
        await user.save();
        console.log('User registered successfully');
        return true;
    } catch (error) {
        console.error('Failed to register user:', error.message);
        return false;
    }
}
