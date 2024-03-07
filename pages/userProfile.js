import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput, View,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { Alert, Dimensions, Pressable } from 'react-native-web';
import RecipesParams from '../components/recipesParams.js';
import { UserLoggedInGlobal } from '../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import BackHeader from '../backHeader';


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
  UserLoggedInGlobal.isLoggedIn = false;
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
            
            //for testing
            setName('John Doe');
            setEmail('john@email.com');
            setAllergens('Peanuts,Berries');
        }
  };
  fetchUserData();
  }, []);
      return (
        <View style={styles.container}>
          <BackHeader/>
          <Text style={styles.title}>User Profile</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>

          <Text style={styles.allergensHeader}>Allergens</Text>
          <Text style={styles.allergens}>{allergens}</Text>

          <View>
            <Pressable style={styles.pageButton} onPress={() => navigation.navigate("UpdateUser")}>
                <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='save' />
                <Text style={styles.pageButtonText}>Update Account</Text>
            </Pressable>
          </View>

          <View>
            <Pressable style={styles.pageButton} onPress={handleLogout}>
                <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='sign-out' />
                <Text style={styles.pageButtonText}>Logout</Text>
            </Pressable>
          </View>

          <View>
            <Pressable style={styles.pageButtonDelete} onPress={deleteAccount}>
                <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='trash-o' />
                <Text style={styles.pageButtonText}>Delete Account</Text>
            </Pressable>
          </View>
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
title: {
  fontSize: 30,
  fontFamily: 'Varela',
  fontWeight: 'bold',
  color: '#171738',
  marginVertical: 20,
},
name: {
  fontSize: 24,
  fontFamily: 'Varela',
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#171738',
},
email: {
  fontSize: 20,
  fontFamily: 'Varela',
  color: '#A38CCF',
},
allergensHeader: {
  fontSize: 20,
  marginTop: 30,
},
allergens: {
  fontSize: 18,
  fontFamily: 'Varela',
  color: '#6BAB5F',
  marginBottom: 60,
},
pageButtonDelete: {
  padding: 30,
  borderColor: '#AE5555',
  width: Dimensions.get('window').width,
  borderWidth: 3,
  textAlign: 'center',
  alignItems: 'center',
  backgroundColor: '#F58383',
},
pageButton: {
  padding: 30,
  borderColor: '#6BAB5F',
  width: Dimensions.get('window').width,
  borderWidth: 3,
  textAlign: 'center',
  alignItems: 'center',
  backgroundColor: '#ACF39D',
},
pageButtonIcon: {
  position: 'absolute',
  left: '10%',
  fontSize: 36
},
pageButtonText: {
  color: '#171738',
  fontWeight: '900',
  fontFamily: 'Varela',
  fontSize: 20,
},
});