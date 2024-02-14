import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react-native';
import RecipesAPI from './components/recipesAPI'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <RecipesAPI/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
