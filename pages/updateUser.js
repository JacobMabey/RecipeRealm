import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, Dimensions, Pressable, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackHeader from '../backHeader';
import recipeRealmLogo from '../assets/RecipeRealmLogo.png';

const UpdateUser = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [allergens, setAllergens] = useState('');
    const [error, setError] = useState('');

    const handleUpdateUser = async () => {
        try {
            if (password != confPassword) {
                console.error('Passwords do not match');
                setError('Passwords do not match');
                return;
            }
            const userData = await AsyncStorage.getItem('userData');
            const { _id: userId } = JSON.parse(userData);
            const response = await axios.put(`http://localhost:5000/api/update/${userId}`, {
                name,
                email,
                password,
                allergens,
            });
            console.log('User updated successfully:', response.data);
            await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));

            navigation.navigate("UserProfile");
        } catch (error) {
            console.error('Error updating user:', error);
            setError('Update failed. Please try again later.');
        }
    };

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
                
                <Image source={recipeRealmLogo} onError={() => console.log('Image not available')} style={styles.backgroundImage}/>

                <Text style={styles.updateHeader}>Update User</Text>

                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
                <Text style={styles.label}>New Password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Enter a new password"
                />
                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput
                    style={styles.input}
                    value={confPassword}
                    onChangeText={setConfPassword}
                    secureTextEntry={true}
                    placeholder="Confirm the new password"
                />
                <Text style={styles.label}>Allergens:</Text>
                <TextInput
                    style={styles.input}
                    value={allergens}
                    onChangeText={setAllergens}
                    placeholder="Enter your allergens"
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <Pressable style={styles.button} onPress={handleUpdateUser}>
                    <Text style={styles.buttonText}>Update User</Text>
                </Pressable>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    updateHeader: {
        fontSize: 26,
        fontFamily: 'Varela',
        fontWeight: 'bold',
        color: '#171738',
        marginTop: 20,
        marginBottom: 30,
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

export default UpdateUser;
