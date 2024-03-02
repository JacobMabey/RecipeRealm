// server.js
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
})

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Logan:302012Lh@atlascluster.mc1zlf4.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define User model
const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    allergens: [String]
});

// API endpoint for user registration
app.post('/api/signup', async (req, res) => {

    try {
        const { name, email, password, allergens } = req.body;
        console.log(name + email + password);

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password,
            allergens
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});
