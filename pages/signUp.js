import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Dimensions, Pressable } from 'react-native-web';
import BackHeader from '../backHeader';
import { UserLoggedInGlobal } from '../App';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [allergens, setAllergens] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      if (!name || !email || !password) {
        setError('Please fill out all fields');
        return;
      }
      if (password != confPassword) {
        setError('Passwords does not match confirmed password')
      }
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
        allergens
      });

      UserLoggedInGlobal.isLoggedIn = true;
      console.log('User registered successfully:', response.data);
      navigation.navigate("UserProfile");
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <BackHeader/>

      <Text style={styles.mainHeader}>Create An Account</Text>

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
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Text style={styles.label}>Confirm Password:</Text>
      <TextInput
        style={styles.input}
        value={confPassword}
        onChangeText={setConfPassword}
        secureTextEntry={true}
        placeholder="Confirm your password"
      />
      <Text style={styles.label}>Allergens:</Text>
      <TextInput
        style={styles.input}
        value={allergens}
        onChangeText={setAllergens}
        placeholder="Enter your allergens"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Login')}
      >
          <Text style={styles.navigationButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for Signup component (similar to Login styles)

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 26,
    fontFamily: 'Varela',
    fontWeight: 'bold',
    color: '#171738',
    marginVertical: 20,
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