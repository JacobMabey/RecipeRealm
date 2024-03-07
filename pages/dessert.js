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

const Dessert = ({navigation}) => {
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
    
    <h1 style={styles.catTitle}>Dessert Recipes</h1>
    <ScrollView>
      <View>
      <RecipesParams type="dessert" name=""/>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Home Page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
}
export default Dessert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'fill',
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
    fontFamily: 'Verela',
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
  },  image: {
        width: Dimensions.get('window').width / 2.0,
        height: 250,
    },
  homeButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },    headerView: {
    width: Dimensions.get('window').width,
    height: 60,
    borderColor: '#6BAB5F',
    borderWidth: 2,
    borderBottomWidth: 0,
    backgroundColor: '#ACF39D',
    justifyContent: 'center',
  },
  headerButton: {
    width: '50%',
    zIndex: 10
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'Varela',
    fontWeight: 900,
    marginLeft: 30,
    color: '#171738',
  },
  accountButton: {
    position: 'absolute',
    width: '100%',
  },
  accountButtonText: {
    textAlign: 'right',
    marginRight: 30,
    fontSize: 18,
    fontFamily: 'Varela',
    fontStyle: 'italic',
    fontWeight: 900,
    color: '#171738',
  }
});