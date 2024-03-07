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
    const [noGo, setNoGo] = useState(false);
    const [recipieName, setRecipieName] = useState('');
    const [calorieCount, setCalorieCount] = useState('');
    const [instruction, setInstruction] = useState('');
    const [allergens, setAllergens] = useState('');
    const [timeEst, setTimeEst] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [image, setImage] = useState('');

    const handleAllergens = () => {
        ingredients = [ingredient];
        allerts = [];
        for(i = 0; i <ingredients.length; i++)
        {
            if(ingredients[i] != null)
            {
                if(ingredients[i].name.toUppercase() == "MILK" || ingredients[i].name.toUppercase() == "EGGS" || ingredients[i].name.toUppercase() == "PEANUTS" || ingredients[i].name.toUppercase() == "SOY" || ingredients[i].name.toUppercase() == "WHEAT" || ingredients[i].name.toUppercase() == "SHELLFISH" || ingredients[i].name.toUppercase() == "FISH" || ingredients[i].name.toUppercase() == "SESAME")
                {
                    allerts.push(ingredients[i]);
                }
            }
            setAllergens(allerts);
        }
    };
    useEffect(() => {
    const fetchRecipeInformation = async () => {
        try {
            do{
                recipeID = randomNumberInRange(1, 999999);
                const APIKEY = '727f8e718e7846989b980e08b4d7e0ff';
                const BASE_URL = `https://api.spoonacular.com/recipes/${recipeID}/information?includeNutrition=true`;
                const PARAMS = `?apiKey=${APIKEY}`;
                const FETCH_URL = `${BASE_URL}${PARAMS}`;
                fetch(FETCH_URL)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((json) => {
                    if (json.results && json.results.length > 0) {
                        const formattedRecipes = json.results.map((recipe) => ({
                            rName: recipe.title,
                            calCount:recipe.summary,
                            ing: recipe.extendedIngredients,
                            inst: recipe.instructions,
                            time: recipe.readyInMinutes,
                            imager: recipe.image
                        }));
                        setRecipieName(rName);
                        setCalorieCount(calCount);
                        setIngredient(ing);
                        setInstruction(inst);
                        setTimeEst(time);
                        setImage(imager);
                        handleAllergens();
                        handleAddRecipe();
                    } 
            else {
                console.error('No results found');
                setNoGo(true);
            }
        })}while(!noGo)
            
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
                calorieCount,
                instruction,
                timeEst,
                ingredient,
                image,
                allergens
            });
        
        console.log('recipe registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering recipe:', error);
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