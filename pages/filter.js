import { Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput, View,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import { Dimensions } from 'react-native-web';

const Filter = ({navigation}) => {
    return (
        <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchBar} placeholder="Search For Recipes"
                        onSubmitEditing={() => navigation.navigate('Home')}/>
                </View>

        </View>
    );
};

export default Filter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        width: Dimensions.get('window').width,
        backgroundColor: '#ffa21a',
    },
    searchContainer: {
        width: Dimensions.get('window').width-20,
        alignItems: 'baseline',
        padding: 15,
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    searchBar: {
        width: Dimensions.get('window').width-80,
        backgroundColor: '#fff',
        padding: 15,
        height: 20,
        borderWidth: 1,
        borderRadius: 17,
        borderColor: '#000',
    }
});