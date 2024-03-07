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
import { UserLoggedInGlobal } from '../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';


const handleLogout = async () => {
try {
  const response = await axios.get('http://localhost:5000/api/logout');
  console.log('User logged out successfully:', response.data);
  await AsyncStorage.setItem('userData', null);
  UserLoggedInGlobal.isLoggedIn = false;
  
  navigation.navigate("Home");
} catch (error) {
    console.error('Error logging out user:', error);
    setError('Login failed. Please try again later.');
}
}
const deleteAccount = async () => {
try {
  const userData = await AsyncStorage.getItem('userData');
  const { _id: userId } = JSON.parse(userData);
  await axios.delete(`http://localhost:5000/api/delete/${userId}`);
  console.log('User deleted successfully:', response.data);
} catch (error) {
  console.error('Error deleting out user:', error);
  setError('Delete failed. Please try again later.');
}
}

const UserProfile = ({ navigation }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [allergens, setAllergens] = useState('');

useEffect(() => {
    const fetchUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            const parsedUserData = JSON.parse(userData);
            const { name, email, allergens } = parsedUserData;
            setName(name);
            setEmail(email);
            setAllergens(allergens);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
  };
  fetchUserData();
  }, []);
      return (
        <View style={styles.container}>
          <Text style={styles.title}>User Profile</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{email}</Text>
          <Text style={styles.title}>{allergens}</Text>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
              <Text>Logout</Text>
          </Pressable>
          <Pressable style={styles.logoutButton} onPress={deleteAccount}>
              <Text>Delete Account</Text>
          </Pressable>
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
},
logoutButton: {
  backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
}
});