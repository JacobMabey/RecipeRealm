import React, { useState, useEffect } from 'react';
import { Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput, View,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 //Pages
import Home from "./pages/index.js"
import Filter from "./pages/filter.js"


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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}