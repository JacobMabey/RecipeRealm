import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput, View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import RecipesParams from '../components/recipesParams.js';
import { Dimensions, Pressable } from 'react-native-web';
import AppHeader from '../header.js';

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
      <AppHeader />
      <View style={styles.tabsContainer} >
        <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
          <Text style={styles.tabButtonText}>Breakfast</Text>
        </Pressable>

        <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Main_Course')}>
          <Text style={styles.tabButtonText}>Main course</Text>
        </Pressable>

        <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Snack')}>
          <Text style={styles.tabButtonText}>snack</Text>
        </Pressable>

        <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Dessert')}>
          <Text style={styles.tabButtonText}>Dessert</Text>
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Pressable style={styles.searchButton} title="Search" onPress={handleSearch} >
          <Icon style={styles.searchButtonIcon} name="search" size={25} color={'#171738'}/>
        </Pressable>
      </View>

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
  tabsContainer: {
    flexDirection: 'row',
    width: '100%',
    borderColor: '#6BAB5F',
    borderWidth: 2,
  },
  tabButton: {
    width: '25%',
    height: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  tabButtonText: {
    fontFamily: 'Varela',
    fontWeight: 'bold',
  },
  searchContainer: {
    width: '90%',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    alignSelf: 'stretch',
    padding: 4,
    fontSize: 16,
    fontFamily: 'Varela',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#171738',
    paddingLeft: 10
  },
  searchButton: {
    width: '10%',
    marginHorizontal: 10,
  }
});