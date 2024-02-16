import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image } from 'react-native';

const RecipesHook = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        grabRecipes();
    }, []);

    const grabRecipes = () => {
        const APIKEY = '644cd0c5013146b0bb6021ab0c0027f2';
        const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
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
                if (json.results && json.results.length > 0 && json.results.length < 2) {
                    setRecipes(json.results);
                } else {
                    console.error('No results found');
                }
            })
            .catch((error) => console.error('Error fetching recipes:', error));
    };

    const RecipeInformation = ({ id }) => {
        const [recipeInfo, setRecipeInfo] = useState(null);

        useEffect(() => {
            console.log('Fetching recipe information for ID:', id);
            const fetchRecipeInformation = async () => {
                try {
                    const APIKEY = '644cd0c5013146b0bb6021ab0c0027f2';
                    const BASE_URL = `https://api.spoonacular.com/recipes/${id}/information`;
                    const PARAMS = `?apiKey=${APIKEY}`;
                    const FETCH_URL = `${BASE_URL}${PARAMS}`;
                    const response = await fetch(FETCH_URL);
                    const json = await response.json();
                    if (json) {
                        setRecipeInfo(json);
                    }
                } catch (error) {
                    console.error('Error fetching recipe information:', error);
                }
            };
            fetchRecipeInformation();
        }, [id]);

        if (!recipeInfo) {
            return <Text>Loading...</Text>;
        }

        return (
            <View>
                {recipeInfo.diets.map((diet, index) => (
                    <Text key={index}>{diet}</Text>
                ))}
                {/* Render other information as needed */}
            </View>
        );
    };

    const RecipesFormat = ({ name, image, onPress }) => {
        return (
            <View>
                <Text style={{ fontSize: 18, fontWeight: '800' }}>{name}</Text>
                <Pressable onPress={onPress}>
                    <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                </Pressable>
            </View>
        );
    };

    return (
        <View>
            {recipes.map((recipe, index) => (
                <View key={index}>
                    <RecipesFormat
                        name={recipe.title}
                        image={recipe.image}
                        onPress={() => RecipeInformation({ id: recipe.id })}
                    />
                </View>
            ))}
        </View>
    );
};

export default RecipesHook;
