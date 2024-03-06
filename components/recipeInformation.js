import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native-paper';

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
      const APIKEY = '886b123c34d44502a4cedaae4f11a007';
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

  recipeInfo.instructions = (recipeInfo.toString() == "" ? "" : "• ") + recipeInfo.instructions.toString().replace("<p>", "").replace("</p>", "").replaceAll(". ", "\n• ");

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.recipeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{recipeInfo.title}</Text>
        </View>
        <Image source={{ uri: recipeInfo.image }} style={styles.image} />
        <Text style={styles.servings}>Serving Size: {recipeInfo.servings}</Text>
        <Text style={styles.description}>{recipeInfo.instructions}</Text>
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
