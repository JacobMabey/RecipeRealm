import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';

const AppHeader = () => {
    navigation = useNavigation();
    
    return (
      <View style={styles.headerView}>
        <Pressable style={styles.headerButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerTitle}>Recipe Realm</Text>
        </Pressable>

        <ProfileButton/>
      </View>
    )
}
export default AppHeader;

const ProfileButton = () => {
  navigation = useNavigation();

  /*if (Global.isLoggedIn) {
    return (
      <Pressable style={styles.accountButton} onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.accountButtonText}>Name</Text>
      </Pressable>
    )
  } else {*/
    return (
      <Pressable style={styles.accountButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.accountButtonText}>Login</Text>
      </Pressable>
    )
  //}
}

const styles = StyleSheet.create({
    headerView: {
      width: Dimensions.get('window').width,
      height: 60,
      borderColor: '#6BAB5F',
      borderWidth: 2,
      borderBottomWidth: 0,
      backgroundColor: '#ACF39D',
      justifyContent: 'center',
    },
    headerButton: {
      width: '50%',
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