import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
} from 'react-native';
import Separator from '../components/separator';
import Button from '../components/button';

const windowWidth = Dimensions.get('window').width;

const NewsDetail = ({ route }) => {
  const data = route.params.data;
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.credential}>Ahmad Mu'min Faisal</Text>
        <Text style={styles.credential}>1203210101</Text>
      </View>
      <Image source={{ uri: data.thumbnail }} style={styles.image} />
      <Separator height={10} />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{data.title}</Text>
        <Separator height={10} />
        <Text style={styles.text}>{data.description}</Text>
        <Separator height={20} />
      </View>
      <Button
        text="read more"
        onPress={() =>
          Linking.openURL(data.link).catch((err) => console.error('Error', err))
        }
      />
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  credential: {
    fontWeight: 'bold',
  },
});
