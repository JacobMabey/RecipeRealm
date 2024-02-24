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


const Stack = createNativeStackNavigator();

export default function App() {

