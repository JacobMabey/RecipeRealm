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
    <SafeAreaView>
   
   
      <View style={styles.container}>

        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Breakfast')}>
            <Text>Breakfast</Text>  
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Lunch')}>
            <Text>Lunch</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Dinner')}>
            <Text>Dinner</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.tabButton}  onPress={() => navigation.navigate('Desserts')}>
            <Text>Desserts</Text>
          </TouchableOpacity>
        </View>
 
        
      </View>
     
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10%',
      backgroundColor: '#ffa21a',
     
     
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      right:80
    },
    loginButton: {
      position: 'absolute',
      borderColor: 'black',
      borderWidth:1,
      borderRadius:50,
      padding:4,
      top: 10,
      right: 10,
      backgroundColor:'#95fbff'
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    tabButton: {
      padding: 10,
      borderColor: 'black',
      width: 85,
      borderWidth:1,
      textAlign: 'center',
      alignItems:'center',
      backgroundColor:'#5ad263'
    },
      pageButton: {
      padding: 10,
      margin:2,
      borderColor: 'black',
      width: 150,
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