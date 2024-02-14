import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

let arrayName = []
let arrayCuisine = []
let arrayIntolerance = []
let arrayNutrients = []
let arrayNutrionalInfo = []
let arrayInstructions = []
let arrayEquipment = []
let arrayIngridientsList = []
let arrayImages = []
let arrayDescription = []
let arrayAllergies = []

const RecipesFormat = ({ name }) => {
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '800' }}> {name}</Text>
      </View>
    );
  };
export default function RecipesHook() {
    const [ingredients, setIngredients] = useState('american');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        grabRecipes();
    }, [ingredients]);

    const grabRecipes = () => {
        const APIKEY = '644cd0c5013146b0bb6021ab0c0027f2';
        const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
        const PARAMS = `?apiKey=${APIKEY}&cuisine=${ingredients}`;
        const FETCH_URL = `${BASE_URL}${PARAMS}`;

        fetch(FETCH_URL)
            .then((response) => response.json())
            .then((json) => {
                if (json.results && json.results.length > 0) {
                    const recipeNames = json.results.map(recipe => recipe.title);
                    setRecipes(recipeNames);
                }
            })
            .catch((error) => console.error('Error fetching recipes:', error));
    };

    return (
        <View>
            {recipes.map((recipe, index) => (
                <RecipesFormat key={index} name={recipe} />
            ))}
        </View>
    );
}
