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
import Dessert from './pages/dessert.js';
import Main_course from './pages/main_course.js';
import Snack from './pages/snack.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <h1>hello</h1>
      </View>
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

          <Stack.Screen name="Main_Course" component={Main_course}
              options={{ headerShown: false }}/>

          <Stack.Screen name="Snack" component={Snack}
              options={{ headerShown: false }}/>

          <Stack.Screen name="Dessert" component={Dessert}
              options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerView: {
    height: 80,
  }
})