import { createNavigationContainerRef } from '@react-navigation/native';
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
import * as RootNavigation from './RootNavigation.js';
import Login from './pages/login.js';

const AppHeader = () => {
    return (
        <View style={styles.headerView}>
            <Pressable style={styles.headerButton} onPress={() => RootNavigation.navigate('Home')}>
                <Text style={styles.headerTitle}>Recipe Realm</Text>
            </Pressable>

            <Pressable style={styles.accountButton} onPress={() => RootNavigation.navigate('Login')}>
                <Text style={styles.accountButtonText}>Login</Text>
            </Pressable>
        </View>
    )
}
export default AppHeader;


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