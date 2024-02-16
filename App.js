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
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Breakfast"
          component={RecipePageBreakfast}
          options={{ title: 'Breakfast' }}
        />
        <Stack.Screen
        name="Featured"
        component={FeaturedRecipes}
        
        />
                <Stack.Screen
        name="Lunch"
        component={RecipePageLunch}
        
        />
                <Stack.Screen
        name="Dinner"
        component={RecipePageDinner}
        
        />
                <Stack.Screen
        name="Desserts"
        component={RecipePageDesserts}
        
        />
        {/* Add other screens similarly */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
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
    
    
      <View style={styles.container}>
        <Text style={styles.header}>Recipe Realm</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text>Login / Sign Up</Text>
        </TouchableOpacity>

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
            <Text>Breakfast</Text>  
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Lunch')}>
            <Text>Lunch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Dinner')}>
            <Text>Dinner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Desserts')}>
            <Text>Desserts</Text>
          </TouchableOpacity>
        </View>

        {/* Image Cycler Section */}
        <ScrollView horizontal>
          {imageUrls.map((url, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Featured')}>
              <Image source={{ uri: url }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recipe Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Browse for recipes"
            onSubmitEditing={() => navigation.navigate('Recipes')}
          />
          <Stack.Screen name="Recipes" component={RecipePage} />
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Browse for Ingredients"
            onSubmitEditing={() => navigation.navigate('Ingredients')}/>
        </View>

        <View>
      <TouchableOpacity style={styles.pageButton}>
      <Text>My Cook Book</Text>
      </TouchableOpacity>
      </View>
       <View>
      <TouchableOpacity style={styles.pageButton}
      onPress={() => navigation.navigate('MealPlanning')}>
      <Text>My Meal Planning</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.pageButton}>
      <Text>My Grocery List</Text>
      </TouchableOpacity>
      </View>
      </View>
      
     
    </ScrollView>
    </SafeAreaView>
  );
}
function RecipePage({navigation}){
return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.pageButton}>
            <Text>Home Page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
);
}
function FeaturedRecipes({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}


function Cookbook({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}
function MealPlanning({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}
function GroceryLists({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}
function RecipePageBreakfast({navigation}){
return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.pageButton} onPress={() => navigation.navigate('Home')}>
            <Text>Home Page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
);

}

function RecipePageLunch({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}
function RecipePageDinner({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}
function RecipePageDesserts({navigation}){
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
  
  <View style={styles.container}>
  <TouchableOpacity style={styles.pageButton}>
      <Text>Home Page</Text>
      </TouchableOpacity>
  
  </View>
  </ScrollView>
  </SafeAreaView>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
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
    borderColor: 'black',
    borderWidth:1,
    borderRadius:50,
    padding:4,
    top: 10,
    right: 10,
    backgroundColor:'#95fbff'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabButton: {
    padding: 10,
    borderColor: 'black',
    width: 85,
    borderWidth:1,
    textAlign: 'center',
    alignItems:'center',
    backgroundColor:'#5ad263'
  },
    pageButton: {
    padding: 10,
    margin:2,
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
    margin: 2,
    borderColor:'black',
    borderWidth:1,
    bottom:2
  },
  searchBarContainer: {
    padding: 5,

  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    backgroundColor:'#a9ffbb' ,
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});
