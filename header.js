import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { UserLoggedInGlobal } from './App';
import recipeRealmLogoText from './assets/RecipeRealmLogoText.png';

const AppHeader = () => {
    navigation = useNavigation();
    
    

    return (
      <View style={styles.headerView}>
        <Pressable style={styles.headerButton} onPress={() => navigation.navigate('Home')}>
          <div style={{height: 80}}>
            <Image source={recipeRealmLogoText} onError={() => console.log('Image not available')} style={styles.logoImage}/>
          </div>
        </Pressable>

        <Text>{name}</Text>
        <ProfileButton/>
      </View>
    )
}
export default AppHeader;

const ProfileButton = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allergens, setAllergens] = useState('');
  navigation = useNavigation();

  if (UserLoggedInGlobal.isLoggedIn) {
    useEffect(() => {
      const fetchUserData = async () => {
          try {
              const userData = await AsyncStorage.getItem('userData');
              const parsedUserData = JSON.parse(userData);
              setName(parsedUserData.name);
              
          } catch (error) {
              console.error('Error fetching user data:', error);
              setName('Error Name');
          }
    };
    fetchUserData();
    }, []);

    return (
      <Pressable style={styles.accountButton} onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.accountButtonText}>{name}</Text>
      </Pressable>
    )
  } else {
    return (
      <Pressable style={styles.accountButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.accountButtonText}>Login</Text>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
    headerView: {
      width: Dimensions.get('window').width,
      height: 80,
      borderColor: '#6BAB5F',
      borderWidth: 2,
      borderBottomWidth: 0,
      backgroundColor: '#ACF39D',
      justifyContent: 'center',
    },
    logoImage: {
      height: 80,
      aspectRatio: 38 / 21
    },
    headerButton: {
      width: '70%',
      height: 80,
      zIndex: 10,
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
      alignItems: 'left',
      alignContent: 'left'
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
  })