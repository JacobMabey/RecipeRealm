import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipesHook = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
  grabRecipes();
}, []);

  const grabRecipes = () => {
    const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
    const PARAMS = `?apiKey=${APIKEY}&number=6`;
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
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
          }));
          setRecipes(formattedRecipes);
        } else {
          console.error('No results found');
        }
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  };

  const saveValueFunction = async (id) => {
    try {
      await AsyncStorage.setItem('recipeID', id.toString());
    } catch (error) {
      console.error('Error saving recipe ID:', error);
    }
  };

  const RecipesFormat = ({ id, name, image }) => {
    const navigation = useNavigation();

    const navigateToRecipeInfo = () => {
      saveValueFunction(id);
      navigation.navigate('Featured');
    };

    return (
      <View style={styles.recipeContainer}>
        <Pressable onPress={navigateToRecipeInfo}>
          <Image source={{ uri: image }} style={styles.image}/>
        </Pressable>
      </View>
    );
  };

  return (
      {recipes.map((recipe) => (
        <View key={recipe.id}>
          <RecipesFormat
            id={recipe.id}
            image={recipe.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    alignItems: 'center',
  },
  image: {
  },
  featuredTitle: {
  }
});

export default RecipesHook;
