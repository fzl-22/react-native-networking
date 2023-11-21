import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Separator from '../components/separator';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.credential}>Ahmad Mu'min Faisal</Text>
        <Text style={styles.credential}>1203210101</Text>
      </View>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Separator height={15} />

      <Text style={styles.text}>
        Many mobile apps need to load resources from a remote URL. You may want
        to make a POST request to a REST API, or you may need to fetch a chunk
        of static content from another server.
      </Text>

      <Separator height={30} />

      <TouchableOpacity
        onPress={() => navigation.navigate('FunctionalComponent')}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Functional Component</Text>
        </View>
      </TouchableOpacity>

      <Separator height={30} />

      <TouchableOpacity onPress={() => navigation.navigate('ClassComponent')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Class Component</Text>
        </View>
      </TouchableOpacity>

      <Separator height={30} />

      <TouchableOpacity onPress={() => navigation.navigate('News')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Techno News</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 7,
    padding: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  credential: {
    fontWeight: 'bold',
  },
});
