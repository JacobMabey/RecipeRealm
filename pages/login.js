import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    Button,
    StyleSheet,
    ScrollView,
    Image,  Dimensions, Pressable
} from 'react-native';
import RecipesParams from '../components/recipesParams.js';
import React, { useState } from 'react';
import BackHeader from '../backHeader.js';
import { UserLoggedInGlobal } from '../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import recipeRealmLogo from '../assets/RecipeRealmLogo.png';

const Login = ({ navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/login', {
                params: { name, password }
            });
            console.log('User logged in successfully:', response.data);
            await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
            UserLoggedInGlobal.isLoggedIn = true;
            
            navigation.navigate("UserProfile");
        } catch (error) {
            console.error('Error logging in user:', error);
            setError('Login failed. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <BackHeader/>

            <Image source={recipeRealmLogo} onError={() => console.log('Image not available')} style={styles.backgroundImage}/>

            <Text style={styles.mainHeader}>Login To An Account</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder="Enter your password"
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.navigationButtonText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        position: 'absolute',
        top: 80,
        opacity: 0.2,
        width: '100%',
        height: '100%',
        zIndex: -100,
    },
    mainHeader: {
      fontSize: 26,
      fontFamily: 'Varela',
      fontWeight: 'bold',
      color: '#171738',
      marginTop: 30,
      marginBottom: 60,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        width: '50%',
        backgroundColor: '#A38CCF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});