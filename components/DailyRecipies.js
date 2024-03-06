import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
const uri = "";
const dbName = 'RecipeRealm';

const recipeData = {
    _RecipeName: recipieName,
    _CalorieCount: calorieCount,
    _Instruction: instruction,
    _Utinciels: utinciels,
    _TimeEst: timeEst,
    _NutrientionalWarnings: nutrientionalWarnings,
    _Ingredients: ingredient,
    _Image: Image
};

const temp = async () => {
    const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
    const BASE_URL = `https://api.spoonacular.com/recipes/${recipeID}/information`;
    const PARAMS = `?apiKey=${APIKEY}`;
    const FETCH_URL = `${BASE_URL}${PARAMS}`;
    const response = await fetch(FETCH_URL);
    const json = await response.json();
    console.log('Recipe information from API:', json);
}

const handleAddRecipe = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/addRecipe', {
            name,
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