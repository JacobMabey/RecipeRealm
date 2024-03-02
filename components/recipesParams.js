import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native-web';
 
const RecipesParamsHook = ({ type }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    grabRecipesParams(type);
  }, [type]);
  const grabRecipesParams = (Type, Name, Ingredients, Intolerance, Diets, Cuisines) => {
    const APIKEY = '644cd0c5013146b0bb6021ab0c0027f2';
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
    const PARAMS = `?apiKey=${APIKEY}&number=5&type=${type}`;
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
  };

  const RecipesFormat = ({ id, name, image }) => {
    const navigation = useNavigation();

    return (
      <Pressable onPress={() => {
        navigateToRecipeInfo(id);
        navigation.navigate('Recipe');
        }}>
        <View style={styles.recipeContainer}>
          <Text style={styles.recipeTitle}>{name}</Text>
          <Image source={{ uri: image }} onError={() => console.log('Image not available')} style={styles.recipeImage} />

          <Pressable style={styles.favButton} onPress={() => {}}>
            <Icon style={styles.favButtonIcon} color='#171738' name='heart-o'/>
          </Pressable>
          
          <Pressable style={styles.addButton} onPress={() => {}}>
            <Icon style={styles.addButtonIcon} color='#171738' name='plus-square-o'/>
          </Pressable>
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
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 4, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 15,
    backgroundColor: '#ACF39D',
  },
  recipeTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 900,
    marginHorizontal: 15,
    marginVertical: 5,
    color: '#171738',
    width: Dimensions.get('window').width - 80,
  },
  recipeImage: {
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * 1/3,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  loader: {
    flex: 1,
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favButton: {
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    width: 50,
    padding: 7,
    margin: 7,
    backgroundColor: '#fff',
    borderRadius: 50,
    top: '20%',
    right: 0,
  },
  favButtonIcon: {
    fontSize: 40
  },
  addButton: {
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    width: 50,
    padding: 7,
    margin: 7,
    backgroundColor: '#fff',
    borderRadius: 50,
    top: '50%',
    right: 0,
  },
  addButtonIcon: {
    fontSize: 40
  }
});
 
export default RecipesParamsHook;
