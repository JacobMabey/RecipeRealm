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
import { Dimensions, Pressable } from 'react-native-web';
import RecipesParams from '../components/recipesParams.js';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();

    const handleLogin = () => {
        // Implement your login logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.navigationButtonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => navigation.navigate('UserProfile')}
            >
                <Text style={styles.navigationButtonText}>User Profile</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;

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
    catTitle: {
        fontFamily: 'Verela',
        color: '#171738',
    },
    homeButton: {
        alignItems: 'center',
        backgroundColor: '#A38CCF',
        padding: 10,
        marginTop: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        bottom: 0,
    },
    homeButtonText: {
        fontSize: 24,
        color: '#FFFFFF',
    }
});