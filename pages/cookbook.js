import { Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { Dimensions, Pressable } from 'react-native-web';
import RecipesParams from '../components/recipesParams.js';
import AppHeader from '../header.js';

const Cookbook = ({navigation}) => {
return (
  <View style={styles.container}>
    <AppHeader/>
    <View style={styles.tabsContainer} >
        <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
            <Text style={styles.tabButtonText}>Breakfast</Text>  
        </Pressable>

        <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Main_Course')}>
            <Text style={styles.tabButtonText}>Main course</Text>
        </Pressable>

        <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Snack')}>
            <Text style={styles.tabButtonText}>snack</Text>
        </Pressable>

        <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Dessert')}>
            <Text style={styles.tabButtonText}>Dessert</Text>
        </Pressable>
    </View>
    
    <h1 style={styles.catTitle}>Favorite Recipes</h1>
    <ScrollView>
      <View>
        {/*Add recipe params recipe list here!*/}
        {/*<RecipesParams type="" name=""/>*/}

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Home Page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
}
export default Cookbook;

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
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'#fff'
  },
  tabButtonText: {
      fontFamily: 'Varela',
      fontWeight: 'bold',
  },
  catTitle: {
    fontFamily: 'Varela',
    color: '#171738',
  },
  homeButton: {
    alignItems: 'center',
    backgroundColor: '#A38CCF',
    padding: 10,
    marginTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 0,
  },
  homeButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});