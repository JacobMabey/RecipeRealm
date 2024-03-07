import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
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

const BackHeader = ({navigation}) => {
    navigation = useNavigation();
    
    return (
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Icon style={styles.backButtonIcon} name="arrow-circle-left"/>
          </Pressable>
          <Text style={styles.headerTitle}>Recipe Realm</Text>
        </View>
      </View>
    )
}
export default BackHeader;


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
    backButton: {
    },
    backButtonIcon: {
      fontSize: 32,
      marginLeft: 30,
      color: '#171738',
    },
    headerTitle: {
      fontSize: 32,
      fontFamily: 'Varela',
      fontWeight: 900,
      marginLeft: 30,
      color: '#171738',
    },
  })