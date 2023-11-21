# React Native Networking

| Nama | Ahmad Mu'min Faisal |
| -- | -- |
| NIM | 1203210101 |
| Kelas | IF-01-01 |
| Link Github | https://github.com/fzl-22/react-native-networking |

## 1 Persiapan

Pertama-tama, buat terlebih dahulu project Expo dengan perintah berikut:

```bash
npx create-expo-app react-native-networking
```

Navigasikan ke folder tersebut, kemudian install beberapa package yang dibutuhkan dengan perintah berikut:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

Dengan ini, package yang dibutuhkan sudah terinstall.

## 2 Membuat Modul Komponen

Buat modul-modul komponen yang dapat digunakan oleh halaman / komponen lain, yaitu `Button` dan `Separator`. Kedua komponen ini diletakkan di folder baru dengan nama `components`.

### 2.1 Button.jsx

![](./assets/report/Button.jsx.png)

Komponen ini berperan sebagai tombol yang dibuat dari komponen `TouchableOpacity` dengan isi `Text` yang sudah dihias. Komponen ini menerima beberapa props, yaitu `onPress` dan `text` sehingga parent component dapat menentukan sendiri fungsi callback yang akan dieksekusi dan text yang di dalam `Button` ini. 

File `components/Button.jsx`:

```jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Button;
```

### 2.2 Separator.jsx

![](./assets/report/Separator.jsx.png)

Komponen ini berperan sebagai pemisah secara vertikal antara komponen dengan komponen lain. Komponen ini dibuat dari komponen `View` yang memiliki tinggi tertentu sesuai dengan nilai props yang dikirimkan.

File `components/Separator.jsx`:

```jsx
import React from "react";
import { View } from "react-native";

const Separator = (props) => {
  return <View style={{ height: props.height }}></View>;
};

export default Separator;

```

## 3 Membuat Halaman

Komponen utama yang ditampilkan dalam satu layar penuh disebut dengan komponen halaman. Untuk itu, buat folder baru bernama `screens` untuk menampung file-file halaman pada aplikasi React Native ini.

### 3.1 Home.jsx

![](./assets/report/Home.jsx.png)

Komponen ini merupakan komponen utama yang pertama kali ditampilkan ketika aplikasi berjalan, yangmana komponen in dibuat menggunakan functional component.

Di dalam halaman ini, ditampilkan logo React Native dan caption pendek melalui komponen `Image` dan `Text`.

Setelah itu, terdapat 3 buah `TouchableOpacity` yang tersusun secara vertikal. Apabila ditekan, masing-masing `TouchableOpacity` akan menjalankan props `onPress`-nya dan melakukan navigasi halaman dengan detail berikut: 

1. `TouchableOpacity` di bawah ini akan menavigasikan ke halaman `FunctionalComponent` apabila ditekan.

    ```jsx
    <TouchableOpacity
      onPress={() => navigation.navigate('FunctionalComponent')}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Functional Component</Text>
      </View>
    </TouchableOpacity>
    ```

2. `TouchableOpacity` di bawah ini akan menavigasikan ke halaman `ClassComponent` apabila ditekan.

    ```jsx
    <TouchableOpacity
      onPress={() => navigation.navigate('ClassComponent')}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Class Component</Text>
      </View>
    </TouchableOpacity>
    ```

3. `TouchableOpacity` di bawah ini akan menavigasikan ke halaman `News` apabila ditekan.

    ```jsx
    <TouchableOpacity
      onPress={() => navigation.navigate('News')}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Techno News</Text>
      </View>
    </TouchableOpacity>
    ```

File `screens/Home.jsx`:

```jsx
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Separator from '../components/Separator';

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
```

### 3.2 FunctionalComponent.jsx

![](./assets/report/FunctionalComponent.jsx.png)

Halaman ini merupakan halaman yang ditampilkan ketika tombol "Functional Component" pada halaman `Home` ditekan. Halaman `FunctionalComponent` dibuat menggunakan functional component. Berikut adalah penjelasan dari setiap potongan kode pada fungsi `FunctionalComponent(){...}`:

Pertama, state dibuat menggunakan `useState`. State tersebut antara lain adalah untuk menangani loading saat mengambil data dari API (`isLoading`) dan untuk menyimpan data dari API setelah `data`.

```jsx
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
```

Kemudian, fungsi asynchronous dideklarasikan untuk nantinya menangani pengambilan (fetch) data dari API. Terdapat 2 fungsi yang melakukan hal yang sama, tetapi menggunakan pendekatan yang berbeda (promise dan async-await). Fungsi tersebut dibuat untuk menangani asynchronous process, yaitu mengambil data dari API.

```jsx
// menggunakan Promise
const getMoviesWithPromise = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => setData(json.movies))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
};

// menggunakan AsyncAwait
const getMoviesWithAsyncAwait = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    setData(json.movies);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
```

Setelah itu, fungsi `renderItem` dideklarasikan untuk melakukan rendering setiap data yang didapatkan dari fungsi `getMoviesWithPromise`. Fungsi ini merupakan fungsi callback yang akan diterima oleh komponen `FlatList`.

```jsx
const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>
        {item.title}, {item.releaseYear}
      </Text>
    </TouchableOpacity>
  );
};
```

Setelah itu, fungsi hook `useEffect` dipanggil untuk menjalankan fungsi `getMoviesWithPromise` sebagai side-effect saat komponen halaman ini dirender pertama kali.

```jsx
useEffect(() => {
  getMoviesWithPromise();
}, []);
```

Setelah itu, komponen yang ada di statement `return` akan dirender. Ketika `isLoading` bernilai `true`, maka akan menampilkan `ActivityIndicator`, jika `false`, maka `data` sudah didapatkan dari API sehingga akan langsung di-render.

File `screens/FunctionalComponent.jsx`:

```jsx
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const FunctionalComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMoviesWithPromise = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const getMoviesWithAsyncAwait = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getMoviesWithPromise();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.credential}>Ahmad Mu'min Faisal</Text>
        <Text style={styles.credential}>1203210101</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#AA0002" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default FunctionalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  item: {
    borderBottomWidth: 1,
    padding: 15,
  },
  itemText: {
    fontSize: 20,
  },
  credential: {
    fontWeight: 'bold',
  },
});
```

### 3.3 ClassComponent.jsx

![](./assets/report/ClassComponent.jsx.png)

Halaman ini merupakan halaman yang ditampilkan ketika tombol "Class Component" pada halaman `Home` ditekan. Halaman `ClassComponent` dibuat menggunakan functional component. Berikut adalah penjelasan dari setiap potongan kode pada class `ClassComponent extends Component {...}`:

Pertama, `constructor` adalah fungsi yang pertama kali dijalankan ketika `ClassComponent` pertama kali diinisiasikan. Fungsi ini menerima `props` dan membuat state untuk menyimpan data dari API dan status loading.

```jsx
constructor(props) {
  super(props);

  this.state = {
    data: [],
    isLoading: true,
  };
}
```

Kemudian, asynchronous method `getMovies` dibuat dengan cara `async` dan `await`. Fungsi ini nantinya digunakan untuk menangani fetch data dari API yangmana proses ini merupakan sebuah asynchronous process.

```jsx
async getMovies() {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    this.setState({ data: json.movies });
  } catch (error) {
    console.error(error);
  } finally {
    this.setState({ isLoading: false });
  }
}
```

Setelah itu, ketika komponen sudah di-mount, maka fungsi `getMovies` akan langsung dijalankan.

```jsx
componentDidMount() {
  this.getMovies();
}
```

Setelah itu, fungsi `renderItem` dideklarasikan untuk melakukan rendering setiap data yang didapatkan dari fungsi `getMovies`. Fungsi ini merupakan fungsi callback yang akan diterima oleh komponen `FlatList`.

```jsx
renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>
        {item.title}, {item.releaseYear}
      </Text>
    </TouchableOpacity>
  );
};
```

Setelah itu, komponen yang ada di fungsi `render` akan dirender. Ketika `isLoading` bernilai `true`, maka akan menampilkan `ActivityIndicator`, jika `false`, maka `data` sudah didapatkan dari API sehingga akan langsung di-render.

File `screens/ClassComponent.jsx`:

```jsx
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getMovies() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      this.setState({ data: json.movies });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.credential}>Ahmad Mu'min Faisal</Text>
          <Text style={styles.credential}>1203210101</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#AA0002" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

export default ClassComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  item: {
    borderBottomWidth: 1,
    padding: 15,
  },
  itemText: {
    fontSize: 20,
  },
  credential: {
    fontWeight: 'bold',
  },
});
```

### 3.4 News.jsx

![](./assets/report/News.jsx.png)

Halaman ini merupakan halaman yang ditampilkan ketika tombol "Techno News" pada halaman `Home` ditekan. Halaman `News` dibuat menggunakan functional component. Berikut adalah penjelasan dari setiap potongan kode pada class `News extends PureComponent {...}`:

Pertama, `constructor` adalah fungsi yang pertama kali dijalankan ketika `News` pertama kali diinisiasikan. Fungsi ini menerima `props` dan membuat state untuk menyimpan data dari API dan status loading.

```jsx
constructor(props) {
  super(props);

  this.state = {
    data: [],
    isLoading: true,
  };
}
```

Kemudian, asynchronous method `getNews` dibuat dengan cara `async` dan `await`. Fungsi ini nantinya digunakan untuk menangani fetch data dari API yangmana proses ini merupakan sebuah asynchronous process.

```jsx
async getNews() {
  try {
    const response = await fetch(
      'https://api-berita-indonesia.vercel.app/cnn/teknologi'
    );
    const json = await response.json();
    this.setState({ data: json.data.posts });
  } catch (error) {
    console.error(error);
  } finally {
    this.setState({ isLoading: false });
  }
}
```

Setelah itu, ketika komponen sudah di-mount, maka fungsi `getNews` akan langsung dijalankan.

```jsx
componentDidMount() {
  this.getNews();
}
```

Setelah itu, fungsi `renderItem` dideklarasikan untuk melakukan rendering setiap data yang didapatkan dari fungsi `getNews`. Fungsi ini merupakan fungsi callback yang akan diterima oleh komponen `FlatList`. Nantinya, setiap data yang dirender akan mendapatkan komponen (terdapat gambar) yang dapat di-klik dan mengarah ke halaman `NewsDetail` sesuai dengan data yang dikirimkan sebagai parameter route.

```jsx
renderItem = ({ item }) => {
  const { navigation } = this.props;

  return (
    <>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('NewsDetail', { data: item })}
      >
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.itemBorder}></View>
    </>
  );
};
```

Setelah itu, komponen yang ada di fungsi `render` akan dirender. Ketika `isLoading` bernilai `true`, maka akan menampilkan `ActivityIndicator`, jika `false`, maka `data` sudah didapatkan dari API sehingga akan langsung di-render.

File `screens/News.jsx`:

```jsx
import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

class News extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getNews() {
    try {
      const response = await fetch(
        'https://api-berita-indonesia.vercel.app/cnn/teknologi'
      );
      const json = await response.json();
      this.setState({ data: json.data.posts });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getNews();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('NewsDetail', { data: item })}
        >
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemBorder}></View>
      </>
    );
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.credential}>Ahmad Mu'min Faisal</Text>
          <Text style={styles.credential}>1203210101</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#AA0002" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ link }, index) => link}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
  },
  itemBorder: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
  },
  itemImage: {
    width: 100,
    height: 80,
  },
  itemText: {
    fontSize: 20,
    width: windowWidth - 150,
    marginLeft: 15,
  },
  credential: {
    fontWeight: 'bold',
  },
});

```

### 3.5 NewsDetail.jsx

![](./assets/report/NewsDetail.jsx.png)

Halaman ini merupakan halaman yang ditampilkan ketika salah satu data pada `FlatList` yang ada di halaman `News` ditekan. Data yang ditampilkan pada halaman ini bersifat dinamis sesuai dengan parameter route yang dikirimkan ke halaman ini. Berikut adalah penjelasan dari potongan kode pada komponen ini.

Pertama, ambil `data` dari parameter route yang dikirimkan dari halaman sebelumnya berdasarkan data mana yang di-klik. Nilai dari `data` inilah yang akan menentukan data apakah yang akan ditampilkan oleh halaman ini.

```jsx
const data = route.params.data;
```

Kemudian, halaman langsung di-render sesuai dengan komponen yang didefinisikan pada blok `return`. Halaman ini akan menampilkan secara berturut-turut `thumbnail`, `title`, dan `description`. Serta, terdapat juga sebuah `Button` bertuliskan "read more" yang akan menjalankan fungsi berikut ketika di-klik:

```jsx
() => Linking.openURL(data.link).catch((err) => console.error('Error', err))
  }
```

Fungsi di atas akan membuka default browser sesuai dengan URL yang didefinisikan pada nilai `link`.

File `screens/NewsDetail.jsx`:

```jsx
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
} from 'react-native';
import Separator from '../components/Separator';
import Button from '../components/Button';

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

```

## 4 App.jsx

Komponen ini merupakan entry-point atau komponen yang pertama kali dijalankan ketika aplikasi berjalan. Di dalam komponen ini, semua komponen dibungkus oleh `NavigationContainer` agar bisa mendapatkan props `navigation` dan bisa melakukan navigasi antar halaman.

Di dalam komponen ini, didefinisikan juga route-route yang digunakan di aplikasi ini.

![](./assets/report/App.jsx.png)

File `App.jsx`:

```jsx
import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import FunctionalComponent from "./screens/FunctionalComponent";
import ClassComponent from "./screens/ClassComponent";
import News from "./screens/News";
import NewsDetail from "./screens/NewsDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  return (
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="#AA0002" />
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "React Native Networking",
                ...headerStyle,
              }}
          />
          <Stack.Screen
              name="FunctionalComponent"
              component={FunctionalComponent}
              options={{
                title: "Functional Component",
                ...headerStyle,
              }}
          />
          <Stack.Screen
              name="ClassComponent"
              component={ClassComponent}
              options={{
                title: "Class Component",
                ...headerStyle,
              }}
          />
          <Stack.Screen
              name="News"
              component={News}
              options={{
                title: "Techno News",
                ...headerStyle,
              }}
          />
          <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              options={{
                title: "News Detail",
                ...headerStyle,
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
```

## 5 Menjalankan Aplikasi

Setelah selesai, jalankan aplikasi dengan perintah berikut:

```bash
npm run android
```