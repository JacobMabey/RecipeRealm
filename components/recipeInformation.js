import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
<<<<<<< HEAD

        const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
=======
      const APIKEY = '1e0518e8abf44e5ea1955e843797d8a4';
>>>>>>> remotes/origin/main
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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>{recipeInfo.title}</Text>
        <Image source={{ uri: recipeInfo.image }} style={styles.image} />
        <Text style={styles.title}>Serving Size: {recipeInfo.servings}</Text>
        <Text style={styles.title}>{recipeInfo.instructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default RecipeInformation;
