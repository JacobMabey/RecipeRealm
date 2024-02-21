import { StyleSheet } from 'react-native';

const Featured = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                <TouchableOpacity style={styles.pageButton} onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Featured;