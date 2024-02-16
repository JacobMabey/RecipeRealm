
// You can import supported modules from npm
import Home from "./pages/index";
import Filter from "./pages/filter";

// or any files within the Snack
//import AssetExample from './components/AssetExample';

function HomeScreen({navigation}) {
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
                <Stack.Screen
        name="cookbook"
        component={Cookbook}
        
        />
              <Stack.Screen
        name="planning"
        component={MealPlanning}
        
        />
              <Stack.Screen
        name="Grocery"
        component={GroceryLists}
        
        />

        {/* Add other screens similarly */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function FilterScreen({navigation}) {
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
      <TouchableOpacity style={styles.pageButton}
       onPress={() => navigation.navigate('cookbook')}>
      <Text>My Cook Book</Text>
      </TouchableOpacity>
      </View>

       <View>
      <TouchableOpacity style={styles.pageButton}
      onPress={() => navigation.navigate('planning')}>
      <Text>My Meal Planning</Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={styles.pageButton}
      onPress={() => navigation.navigate('Grocery')}>
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
          <TouchableOpacity style={styles.pageButton} onPress={() => navigation.navigate('Home')}>
            <Text>Home Page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
);
}
function FeaturedRecipes({navigation}){
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


function Cookbook({navigation}){
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
function MealPlanning({navigation}){
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
function GroceryLists({navigation}){
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
function RecipePageDinner({navigation}){
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
function RecipePageDesserts({navigation}){
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

/*const styles = StyleSheet.create({
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
*/