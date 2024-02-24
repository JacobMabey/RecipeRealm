import { Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

const RecipePage = ({navigation}) => {
return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.pageButton} onPress={() => navigation.navigate('Home')}>
            <Text>Home Page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
);
}
export default RecipePage;

const styles = StyleSheet.create({
    
});