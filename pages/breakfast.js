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

const Breakfast = ({navigation}) => {
return (
  <View style={styles.container}>
    <View style={styles.tabsContainer} >
        <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
            <Text style={styles.tabButtonText}>Breakfast</Text>  
        </Pressable>

        <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Lunch')}>
            <Text style={styles.tabButtonText}>Lunch</Text>
        </Pressable>

        <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Dinner')}>
            <Text style={styles.tabButtonText}>Dinner</Text>
        </Pressable>

        <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Filter')}>
            <Text style={styles.tabButtonText}>Filter</Text>
        </Pressable>
    </View>
    
    <h1 style={styles.catTitle}>Breakfast Recipes</h1>
    <ScrollView>
      <View>
      <RecipesParams type="breakfast"/>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Home Page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
}
export default Breakfast;

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
  },
  homeButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  }
});