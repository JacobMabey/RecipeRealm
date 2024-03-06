const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Logan:302012Lh@atlascluster.mc1zlf4.mongodb.net/RecipeRealm', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String,
    allergens: [String]
});

app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password, allergens } = req.body;
        const user = new User({
            name,
            email,
            password,
            allergens
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await User.deleteOne({ _id: userId });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/login', async (req, res) => {
    try {
        const {name, password} = req.query;
        const user = await User.findOne({ name, password });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User login successful', user });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/update/:id', async (req, res) => {
    try {
        const { name, email, password, allergens } = req.body;
        const userId = req.params.id;
        await User.updateOne({ _id: userId }, { name, email, password, allergens });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});
