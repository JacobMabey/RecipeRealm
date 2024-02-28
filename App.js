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

import Home from "./pages/index.js";
import Filter from "./pages/filter.js";
import Recipe from "./pages/recipe.js";
import Featured from "./pages/featured.js";
import Breakfast from "./pages/breakfast.js";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}
              options={{ headerShown: false }}/>
              
          <Stack.Screen name="Filter" component={Filter}
              options={{ headerShown: false }}/>
              
          <Stack.Screen name="Recipe" component={Recipe}
              options={{ headerShown: false }}/>
              
          <Stack.Screen name="Featured" component={Featured}
              options={{ headerShown: false }}/>
              
          <Stack.Screen name="Breakfast" component={Breakfast}
              options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}