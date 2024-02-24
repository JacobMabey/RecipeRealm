import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipesParamsHook = ({ type }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    grabRecipesParams(type);
  }, [type]);

  const grabRecipesParams = (type) => {
    const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
    const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
    const PARAMS = `?apiKey=${APIKEY}&number=5&type=${type}`;
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
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
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
    
    const navigateToRecipeInfo = (id) => {
    saveValueFunction(id);
    navigation.navigate('Featured');
  };

    return (
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>{name}</Text>
        <Pressable onPress={() => navigateToRecipeInfo(id)}>
          <Image source={{ uri: image }} style={styles.image} />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      {recipes.map((recipe) => (
        <RecipesFormat
          key={recipe.id}
          id={recipe.id}
          name={recipe.title}
          image={recipe.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 150,
    margin: 2,
    borderColor: 'black',
    borderWidth: 1,
    bottom: 2,
  }
});

export default RecipesParamsHook;
