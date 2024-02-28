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
import { Dimensions } from 'react-native-web';
import RecipesParams from '../components/recipesParams.js';

const Dessert = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <RecipesParams type="dessert" />
                    <TouchableOpacity style={styles.pageButton} onPress={() => navigation.navigate('Home')}>
                        <Text>Home Page</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default Dessert;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
});