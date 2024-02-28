import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://Logan:302012Lh@atlascluster.mc1zlf4.mongodb.net/';
const dbName = 'RecipeRealm';

async function registerUser({ Username, Password, Email, Allergens }) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(dbName);
        const usersCollection = db.collection('Users');
        
        
        await usersCollection.insertOne({ 'Username': Username, 'Password': Password, 'Email': Email, 'Allergens': Allergens });
        
        console.log('User registered successfully');
    } finally {
        await client.close();
    }
}


registerUser({
    Username: 'exampleUser',
    Password: 'examplePassword',
    Email: 'user@example.com',
    Allergens: ['peanuts', 'shellfish']
});
