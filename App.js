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
import Login from './pages/login.js';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  return (
    <SafeAreaView>
      <NavigationContainer>
      <View style={styles.headerView}>
        <Pressable style={styles.headerButton} onPress={() => navigation.navigate('Home') }>
          <Text style={styles.headerTitle}>Recipe Realm</Text>
        </Pressable>

        <Pressable style={styles.accountButton} onPress={() => navigation.navigate('Login') }>
          <Text style={styles.accountButtonText}>Login</Text>
        </Pressable>
      
      </View>
      </NavigationContainer>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={Home}
              options={{ headerShown: false }}/>
              
          <Stack.Screen name="Login" component={Login}
              options={{headerShown:false}}/>

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
    width: Dimensions.get('window').width,
    height: 60,
    borderColor: '#6BAB5F',
    borderWidth: 2,
    borderBottomWidth: 0,
    backgroundColor: '#ACF39D',
    justifyContent: 'center',
  },
  headerButton: {
    width: '50%',
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'Varela',
    fontWeight: 900,
    marginLeft: 30,
    color: '#171738',
  },
  accountButton: {
    position: 'absolute',
    width: '100%',
  },
  accountButtonText: {
    textAlign: 'right',
    marginRight: 30,
    fontSize: 18,
    fontFamily: 'Varela',
    fontStyle: 'italic',
    fontWeight: 900,
    color: '#171738',
  }
})