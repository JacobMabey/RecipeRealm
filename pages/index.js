import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, Pressable } from 'react-native-web';

import Filter from "./filter.js";
import Recipe from "./recipe.js";

import RecipesAPI from '../components/recipesAPI.js';
import { Colors } from 'react-native-paper';

const Home = ({ navigation }) => {
    // Define your images for the image cycler
    const imageUrls = [
        RecipesAPI,
    ];

    return (
        <View style={styles.container}>

            <View style={styles.headerView}>
                <Pressable style={styles.headerButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.headerTitle}>Recipe Realm</Text>
                </Pressable>

                <Pressable style={styles.accountButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.accountButtonText}>Login</Text>
                </Pressable>
            </View>
            <View style={styles.tabsContainer} >


                <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
                    <Text style={styles.tabButtonText}>Breakfast</Text>
                </Pressable>

                <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Main_Course')}>
                    <Text style={styles.tabButtonText}>Main course</Text>
                </Pressable>

                <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Snack')}>
                    <Text style={styles.tabButtonText}>snack</Text>
                </Pressable>

                <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Dessert')}>
                    <Text style={styles.tabButtonText}>Dessert</Text>
                </Pressable>
            </View>

            <View>
                <Text style={styles.featuredTitle}>Featured</Text>
                <ScrollView horizontal style={{ width: Dimensions.get('window').width }}>
                    {imageUrls.map((url, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe')}>
                            <RecipesAPI />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View>
                <Pressable style={styles.pageButtonBrowse}
                    onPress={() => navigation.navigate('Filter')}>
                    <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='search' />
                    <Text style={styles.pageButtonText}>Browse Recipes</Text>
                </Pressable>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                    onPress={() => navigation.navigate('cookbook')}>
                    <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='book' />
                    <Text style={styles.pageButtonText}>My Cook Book</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                    onPress={() => navigation.navigate('planning')}>
                    <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='calendar-alt' />
                    <Text style={styles.pageButtonText}>My Meal Planning</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                    onPress={() => navigation.navigate('Grocery')}>
                    <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='shopping-cart' />
                    <Text style={styles.pageButtonText}>My Grocery List</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Home;


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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabButtonText: {
        fontFamily: 'Varela',
        fontWeight: 'bold',
    },
    pageButtonBrowse: {
        padding: 30,
        borderColor: '#8774A9',
        width: Dimensions.get('window').width,
        borderWidth: 3,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#A38CCF',
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
    image: {
        width: Dimensions.get('window').width / 2.0,
        height: 250,
    },
    featuredTitle: {
        position: 'absolute',
        zIndex: 10,
        width: Dimensions.get('window').width,
        textAlign: 'center',

    }, headerView: {
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
        zIndex: 10
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
});