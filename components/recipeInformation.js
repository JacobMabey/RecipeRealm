import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, StyleSheet, Dimensions, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native-paper';
import axios from 'axios';

const RecipeInformation = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeInformation = async () => {
      try {
      const recipeID = await AsyncStorage.getItem('recipeID');
      if (!recipeID) {
        console.error('No recipe ID found in AsyncStorage');
        setLoading(false);
        return;
      }
      const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
      const BASE_URL = `https://api.spoonacular.com/recipes/${recipeID}/information`;
      const PARAMS = `?apiKey=${APIKEY}`;
      const FETCH_URL = `${BASE_URL}${PARAMS}`;
      const response = await fetch(FETCH_URL);
      const json = await response.json();
      console.log('Recipe information from API:', json);
      
      if (json && !json.hasOwnProperty('status')) {
        setRecipeInfo(json);
      } else {
        console.error('Recipe information not found or incomplete:', json);
      }
    } catch (error) {
      console.error('Error fetching recipe information:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchRecipeInformation();
}, []);

const favoriteRecipe = async () => {
  try {
    const recipeID = await AsyncStorage.getItem('recipeID');
    const userData = await AsyncStorage.getItem('userData');
    const { _id: userId } = JSON.parse(userData);
    const response = await axios.put(`http://localhost:5000/api/favorite/${userId}`, {
      recipeId: recipeID
    });
    console.log('Favorite recipe added successfully:', response.data);
  } catch (error) {
    console.error('Error adding recipe to favorites:', error);
  }
}
  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (!recipeInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Recipe information not found</Text>
      </View>
    );
  }

  //recipeInfo.instructions = (recipeInfo.toString() == "" ? "" : "• ") + recipeInfo.instructions.toString().replace("<p>", "").replace("</p>", "").replaceAll(". ", "\n• ");

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.recipeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{recipeInfo.title}</Text>
        </View>
        <Image source={{ uri: recipeInfo.image }} style={styles.image} />
        <Text style={styles.servings}>Serving Size: {recipeInfo.servings}</Text>
        <div dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }} />
        <Pressable onPress={favoriteRecipe} style={styles.button}></Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    padding: 10,
    zIndex: 10,
    backgroundColor: '#00000066'
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Varela',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  servings: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Varela',
    color: '#6BAB5F',
  },
  description: {
    marginVertical: 15,
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: 'Varela',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  image: {
    width: Dimensions.get('window').width,
    width: 300,
    height: 200,
    objectFit: 'Fill',
    border: 1,
    borderColor:'black',
    borderWidth:1,
    bottom:2
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginVertical: 30,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
  }
});

export default RecipeInformation;
