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

const Home = () => {
    // Define your images for the image cycler
  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
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

            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    {imageUrls.map((url, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Featured')}>
                        <Image source={{ uri: url }} style={styles.image} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            

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
    searchBarContainer: {
      padding: 5,
   
    },
    searchBar: {
      height: 40,
      borderColor: 'gray',
      backgroundColor:'#a9ffbb' ,
      borderRadius: 50,
      borderWidth: 1,
      padding: 10,
      width: '100%',
    },
  });