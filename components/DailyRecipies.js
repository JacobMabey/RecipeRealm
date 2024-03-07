import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

//randomizerId: Int32,
    //recipieName: String,
    //calorieCount: Int32,
    //instruction: String,
    //utinciels: String,
    //timeEst: String,
    //ingredient: String,
    //image: Image,
    //allergens: [String]

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

const AddRecipeInformation = () => {
    const [recipeInfo, setRecipeInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recipieName, setRecipieName] = useState('');
    const [calorieCount, setCalorieCount] = useState('');
    const [instruction, setInstruction] = useState('');
    const [allergens, setAllergens] = useState('');
    const [utinciels, setUtinciels] = useState('');
    const [timeEst, setTimeEst] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [image, setImage] = useState('');
    useEffect(() => {
    const fetchRecipeInformation = async () => {
        try {
            recipeID = randomNumberInRange(1, 999999);
            const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
            const BASE_URL = `https://api.spoonacular.com/recipes/${recipeID}/information`;
            const PARAMS = `?apiKey=${APIKEY}`;
            const FETCH_URL = `${BASE_URL}${PARAMS}`;
            const response = await fetch(FETCH_URL);
            const json = await response.json();
            console.log('Recipe information from API:', json);
            
            if (json && !json.hasOwnProperty('status')) 
            {
                handleAddRecipe();
            } 
            else 
            {
                console.error('Recipe information not found or incomplete:', json);
            }
    } 
    catch (error) {
        console.error('Error fetching recipe information:', error);
    } 
    finally {
        setLoading(false);
    }
    };
    fetchRecipeInformation();
    }, []);


    const handleAddRecipe = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/addRecipe', {
                recipieName,
                email,
                password,
                allergens
            });
        
        console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
            setError('Registration failed. Please try again later.');
        }
    };
}
// Passes actual recipie data into a temp array
function getRecipeById (Id)
{
    use('RecipeRealm');

    Id=1;

    return db.getCollection('Recipes').find({id: Id});
}
function addRecipe (id, recipieName, calorieCount, instruction, utinciels, timeEst, ingredient, mealType)
{
    use('RecipeRealm');

    id = 2;
    recipieName = 'Test';
    calorieCount = 40;
    instruction = "cook like you would one of your french girls";
    utinciels = "Spoon";
    timeEst = "40 mins",
    ingredient = "food, idiot";
    mealType = "Linner"

    // Insert a few documents into the sales collection.
    db.getCollection('Recipes').insertOne([
        { 'id': id, 'item': recipieName, 'calories': calorieCount, 'qusine': 'American', 'instructions': instruction, 'Utinciels': utinciels, 'Time': timeEst, 'ingredients': ingredient, 'meal': mealType}
    ]);
}

export default AddRecipeInformation;