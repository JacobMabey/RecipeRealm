import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipesParamsHook = ({ type }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    grabRecipesParams(type);
  }, [type]);

  const grabRecipesParams = (Type, Name, Ingredients, Intolerance, Diets, Cuisines) => {
    const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
    const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
    const queryParams = new URLSearchParams({
      apiKey: APIKEY,
      number: 5,
      Type: Type,
      Name: Name,
      Ingredients: Ingredients,
      Intolerance: Intolerance,
      Diets: Diets,
      Cuisines: Cuisines,
    });
    const FETCH_URL = `${BASE_URL}?${queryParams.toString()}`;

    fetch(FETCH_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setLoading(false);
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
        setLoading(false);
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

  const navigateToRecipeInfo = (id) => {
    saveValueFunction(id);
    navigation.navigate('Featured');
  };

  const RecipesFormat = ({ id, name, image }) => {
    return (
      <Pressable onPress={() => navigateToRecipeInfo(id)}>
        <View style={styles.recipeContainer}>
          <Text style={styles.title}>{name}</Text>
          <Image source={{ uri: image }} onError={() => console.log('Image not available')} style={styles.image} />
        </View>
      </Pressable>
    );
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    overflow: 'hidden', // Ensure image does not overflow the container
    borderRadius: 8, // Adjust as needed
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipesParamsHook;

