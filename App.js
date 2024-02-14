import React from 'react';
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


export default function HomeScreen({ navigation }) {
  // Define your images for the image cycler
  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.header}>Recipe Realm</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text>Login / Sign Up</Text>
        </TouchableOpacity>

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabButton}>
            <Text>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text>Dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text>Desserts</Text>
          </TouchableOpacity>
        </View>

        {/* Image Cycler Section */}
        <ScrollView horizontal>
          {imageUrls.map((url, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('FeaturedRecipes')}>
              <Image source={{ uri: url }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recipe Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for recipes"
            onSubmitEditing={() => navigation.navigate('RecipePage')}
          />
        </View>
        <View>
      <TouchableOpacity style={styles.pageButton}>
      <Text>My Cook Book</Text>
      
      </TouchableOpacity>
      </View>
      </View>
      
      </NavigationContainer>
    </ScrollView>
    </SafeAreaView>
  );
}
function RecipePage({navigation}){
  <view>
  
  </view>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffa21a',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    right:80
  },
  loginButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabButton: {
    padding: 10,
    borderColor: 'black',
    width: 80,
    borderWidth:1,
    textAlign: 'center',
    alignItems:'center',
    backgroundColor:'#5ad263'
  },
    pageButton: {
    padding: 10,
    borderColor: 'black',
    width: 150,
    borderWidth:1,
    textAlign: 'center',
    alignItems:'center',
    backgroundColor:'#5ad263'
  },
  image: {
    width: 200,
    height: 150,
    margin: 10,
  },
  searchBarContainer: {
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});
