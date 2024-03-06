import { Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { Dimensions } from 'react-native-web';
import RecipeInformation from '../components/recipeInformation';

const Recipe = ({navigation}) => {
return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <RecipeInformation/>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.homeButtonText}>Home Page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
);
}
export default Recipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
  homeButton: {
    width: 150,
    alignItems: 'center',
    backgroundColor: '#A38CCF',
    paddingVertical: 10,
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