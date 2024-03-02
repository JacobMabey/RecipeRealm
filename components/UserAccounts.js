import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allergens, setAllergens] = useState('');

    const handleSubmit = async () => {
        try {
            if (!name || !email || !password) {
                console.log('Please fill out all fields');
                return;
            }

            const response = await axios.post('http://localhost:5000/api/signup', {
                name,
                email,
                password,
                allergens
            });

            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
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
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                />
                {/* Add input for allergens if needed */}
                {/* <Text style={styles.label}>Allergens:</Text>
                <TextInput
                    style={styles.input}
                    value={allergens}
                    onChangeText={setAllergens}
                    placeholder="Enter your allergens"
                /> */}
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Signup;
