import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./pages/index.js";
import Filter from "./pages/filter.js";
import Recipe from "./pages/recipe.js";
import Breakfast from "./pages/breakfast.js";
import Cookbook from "./pages/cookbook.js"
import Dessert from './pages/dessert.js';
import Main_course from './pages/main_course.js';
import Snack from './pages/snack.js';
import Login from './pages/login.js';
import SignUp from './pages/signUp.js';
import UserProfile from './pages/userProfile.js';
import UpdateUser from './pages/updateUser.js';

export const Stack = createNativeStackNavigator();

export class UserLoggedInGlobal {
    static isLoggedIn = true;
}

export default function App() {
    
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">

                    <Stack.Screen name="Home" component={Home}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Login" component={Login}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="SignUp" component={SignUp}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="UserProfile" component={UserProfile}
                        options={{ headerShown: false }} />
                        
                    <Stack.Screen name="UpdateUser" component={UpdateUser}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Filter" component={Filter}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Recipe" component={Recipe}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Breakfast" component={Breakfast}
                        options={{ headerShown: false }} />
                        
                    <Stack.Screen name="Cookbook" component={Cookbook}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Main_Course" component={Main_course}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Snack" component={Snack}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Dessert" component={Dessert}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
