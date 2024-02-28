import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text,
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

const Home = ({navigation}) => {
    // Define your images for the image cycler
const imageUrls = [
    RecipesAPI,
];

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer} >
                <Pressable style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
                    <Text style={styles.tabButtonText}>Breakfast</Text>  
                </Pressable>
        
                <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Lunch')}>
                    <Text style={styles.tabButtonText}>Lunch</Text>
                </Pressable>
        
                <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Dinner')}>
                    <Text style={styles.tabButtonText}>Dinner</Text>
                </Pressable>
        
                <Pressable style={styles.tabButton}  onPress={() => navigation.navigate('Filter')}>
                    <Text style={styles.tabButtonText}>Filter</Text>
                </Pressable>
            </View>

            <View>
                <Text style={styles.featuredTitle}>Featured</Text>
                <ScrollView horizontal style={{width: Dimensions.get('window').width}}>
                    {imageUrls.map((url, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe')}>
                            <RecipesAPI/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            
            {/*
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Browse for recipes"
                    onSubmitEditing={() => navigation.navigate('Recipes')}/>
                    <Stack.Screen name="Recipes" component={RecipePage} />
            </View>
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Browse for Ingredients"
                    onSubmitEditing={() => navigation.navigate('Ingredients')}/>
            </View>
            */}
        
            <View>
                <TouchableOpacity style={styles.pageButton}
                onPress={() => navigation.navigate('cookbook')}>
                <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='book'/>
                <Text style={styles.pageButtonText}>My Cook Book</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                onPress={() => navigation.navigate('planning')}>
                <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='calendar-alt'/>
                <Text style={styles.pageButtonText}>My Meal Planning</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                onPress={() => navigation.navigate('Grocery')}>
                <Icon style={styles.pageButtonIcon} size='40' color='#171738' name='shopping-cart'/>
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
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
    tabButtonText: {
        fontFamily: 'Varela',
        fontWeight: 'bold',
    },
    pageButton: {
        padding: 30,
        borderColor: '#6BAB5F',
        width: Dimensions.get('window').width,
        borderWidth: 3,
        textAlign: 'center',
        alignItems:'center',
        backgroundColor:'#ACF39D',
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

    },
});