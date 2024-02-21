import React, { useState, useEffect } from 'react';
import { Text,
 SafeAreaView,
  TouchableOpacity,
  TextInput, View,
  StyleSheet,
  ScrollView,
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesAPI from './components/recipesAPI'
import RecipeInformation from './components/recipeInformation'; 
import RecipesParams from './components/recipesParamsAPI'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Breakfast"
          component={RecipePageBreakfast}
          options={{ title: 'Breakfast' }}
          
        />
        <Stack.Screen
        name="Featured"
        component={FeaturedRecipes}
        
        />
                <Stack.Screen
        name="Lunch"
        component={RecipePageLunch}
        
        />
                <Stack.Screen
        name="Dinner"
        component={RecipePageDinner}
        
        />
                        <Stack.Screen
        name="Desserts"
        component={RecipePageDesserts}
        
        />
                <Stack.Screen
        name="cookbook"
        component={Cookbook}
        
        />
              <Stack.Screen
        name="planning"
        component={MealPlanning}
        
        />
              <Stack.Screen
        name="Grocery"
        component={GroceryLists}
        
        />

        {/* Add other screens similarly */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  // Define your images for the image cycler
  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
  ];

  return (
    <SafeAreaView>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}
              options={{ headerShown: false }}/>
              
          <Stack.Screen name="Filter" component={Filter}
              options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}