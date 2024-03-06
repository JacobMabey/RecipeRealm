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

const UserProfile = ({navigation}) => {
        // Fetch user profile data or implement user profile functionality
      
        return (
          <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            {/* Display user profile information */}
          </View>
        );
      };
      
      // Styles for UserProfile component
      
      export default UserProfile;

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