import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput, View,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import React, { useState } from 'react';
import RecipesParams from '../components/recipesParams.js';
import { Dimensions } from 'react-native-web';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Check if updateFilterParams is a function before calling it
    //if (typeof updateFilterParams === 'function') {
      //updateFilterParams(searchTerm);
    //} else {
    //  console.error("updateFilterParams is not a function");
    //}
    setSearch(searchTerm)
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <RecipesParams type="" name={search}/>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
});