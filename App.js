//import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import Home from "./pages/index";
import Filter from "./pages/filter";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
        </Routes>
    </Router>
    /*<SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>*/
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
*/