import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import RecipesParams from '../components/recipesParams.js';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Check if updateFilterParams is a function before calling it
    //if (typeof updateFilterParams === 'function') {
      updateFilterParams(searchTerm);
    //} else {
    //  console.error("updateFilterParams is not a function");
    //}
  };

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <RecipesParams name="chicken"/>
    </View>
  );
};

export default Filter;
