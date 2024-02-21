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
import { Dimensions } from 'react-native-web';

import Filter from "./filter.js";
import Featured from "./featured.js";

import RecipeAPI from "../components/recipesAPI.js";

const Home = ({navigation}) => {
    // Define your images for the image cycler
const imageUrls = [
    RecipeAPI,
];

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer} >
                <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
                    <Text>Breakfast</Text>  
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Lunch')}>
                    <Text>Lunch</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Dinner')}>
                    <Text>Dinner</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Filter')}>
                    <Text>Filter</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal style={{width: Dimensions.get('window').width}}>
                {imageUrls.map((url, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Featured')}>
                    <RecipeAPI/>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            
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
                <Text>My Cook Book</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                onPress={() => navigation.navigate('planning')}>
                <Text>My Meal Planning</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.pageButton}
                onPress={() => navigation.navigate('Grocery')}>
                <Text>My Grocery List</Text>
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
        justifyContent: 'center',
        alignSelf: 'stretch',
        width: Dimensions.get('window').width,
        backgroundColor: '#ffa21a',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 0,
    },
    tabButton: {
        borderColor: 'black',
        width: '25%',
        borderWidth:1,
        textAlign: 'center',
        alignItems:'center',
        backgroundColor:'#5ad263'
    },
    pageButton: {
        padding: 30,
        borderColor: 'black',
        width: Dimensions.get('window').width,
        borderWidth:1,
        textAlign: 'center',
        alignItems:'center',
        backgroundColor:'#5ad263'
    },
    image: {
        width: 200,
        height: 150,
        margin: 2,
        borderColor:'black',
        borderWidth:1,
        bottom:2
    },
  });