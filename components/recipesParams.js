import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipesParamsHook = ({ type }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    grabRecipesParams(type);
  }, [type]);

  const grabRecipesParams = (Type, Name, Ingredients, Intolerance, Diets, Cuisines) => {
    const APIKEY = '886b123c34d44502a4cedaae4f11a007';
    const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
    const queryParams = new URLSearchParams({
      apiKey: APIKEY,
      number: 5,
      Type: Type,
      Name: Name,
      Ingredients: Ingredients,
      Intolerance: Intolerance,
      Diets: Diets,
      Cuisines: Cuisines
    });
    const PARAMS = `?apiKey=${APIKEY}&random?number=5&type=${type}`;
    const FETCH_URL = `${BASE_URL}${PARAMS}`;
    //const FETCH_URL = `${BASE_URL}?${queryParams.toString()}`;



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
    navigation.navigate('Recipe');
  };

  const RecipesFormat = ({ id, name, image }) => {
    const navigation = useNavigation();

    return (
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>{name}</Text>
        <Pressable onPress={() => navigateToRecipeInfo(id)}>
          <Image source={{ uri: image }} onError={() => console.log('Image not available')} style={styles.image} />
        </Pressable>
      </View>
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
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipesParamsHook;
