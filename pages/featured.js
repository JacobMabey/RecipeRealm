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
import RecipeInformation from '../components/recipeInformation.js'; 

const Featured = ({navigation}) => {
return (
  <View style={styles.container}>
    <ScrollView>
      <View>
      <RecipeInformation/>
        <TouchableOpacity style={styles.pageButton} onPress={() => navigation.navigate('Home')}>
          <Text>Home Page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
}
export default Featured;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
});