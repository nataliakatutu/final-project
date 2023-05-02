import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Home, Search, DanauLinow} from '../../assets';
import SlideGambar from './slidegambar';
import {SliderBox} from 'react-native-image-slider-box';

const PagesDanauLinow = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0000'} barStyle={'dark-content'} />

      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          activeOpacity={0.7}>
          <View>
            <Home />
          </View>
        </TouchableOpacity>
        <Text style={styles.namaapp}>BAPONTAR</Text>
        <Search />
      </View>
      <View>
        <DanauLinow />
        <View
          style={{
            position: 'absolute',
            // bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Text style={styles.textPict}>Danau Linow</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Deskripsi</Text>
        <Text style={styles.cardContent}>
          Danau Linouw adalah sebuah danau vulkanik yang terletak diluar
          Tomohon, dekat Manado, Indonesia. Beberapa lubang hidrotermal
          memuntahkan gas panas dari tepi dan kedalaman danau. Komposisi kimiawi
          yang berubah dari danau berarti warnanya sering berubah warna, mulai
          dari merah, hijau tua, dan bahkan biru gelap.
        </Text>
      </View>
      <SlideGambar />
    </View>
  );
};

export default PagesDanauLinow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  namaapp: {
    fontSize: 28,
    fontFamily: 'Poppins-LightMedium',
    color: 'black',
  },
  navBar: {
    flex: 0.2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textPict: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    padding: 90,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginTop: -25,
  },
  cardTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
