import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import {
  Home,
  Search,
  BukitKasih,
  IconBack,
  IconLove,
  Youtube,
  Waktu,
  Uang,
  Map,
} from '../../assets';
import {Image} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import SlideGambar from './slidegambar';
import Komentar from './komentar';
import {useNavigation} from '@react-navigation/native';

const openYouTube = () => {
  Linking.openURL('-	https://youtu.be/V26-Q_WTPAc');
};

const openMaps = () => {
  Linking.openURL('https://goo.gl/maps/Mie7VudiPbxiphBTA');
};

const SplashScreen = ({navigation}) => {
  const {navigate} = useNavigation();

  const navigateToHome = () => {
    navigate('Home');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#0000'} barStyle={'dark-content'} />
        <View>
          <BukitKasih />
          <View
            style={{
              position: 'absolute',
              // bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Text style={styles.textPict}>Bukit Kasih</Text>
            <TouchableOpacity
              style={{position: 'absolute', top: 20, left: 20}}
              onPress={navigateToHome}>
              <IconBack name="icon-back" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 20}}
              onPress={() => this.props.navigation.goBack()}>
              <IconLove name="icon-love" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deskripsi</Text>
          <Text style={styles.cardContent}>
            Bukit Kasih ini terletak sekitar 55 km arah selatan Manado, tepatnya
            di Desa Kanonang, Kabupaten Minahasa. Bukit Kasih ini merupakan
            bukit belerang yang masih alami.
          </Text>
          <View style={styles.ratingContainer}>
            <Waktu style={styles.ikon} />
            <Text style={styles.ikoText}> Waktu Kunjungan:</Text>
            <Text style={styles.ikoTextWaktu}>Jam 07:00-17:00 WITA</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Uang style={styles.ikon} />
            <Text style={styles.ikoText}> Harga Tiket Masuk: Rp. 10.000</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Map style={styles.ikon} />
            <TouchableOpacity onPress={openMaps}>
              <Text style={styles.ikoText}>
                Jl. Kawangkoan-Kanonang, Kanonang Empat
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Youtube style={styles.ikon} />
            <TouchableOpacity onPress={openYouTube}>
              <Text style={styles.ikoTextYoutube}>YouTube Video</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ratingContainer}>
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star-half-empty" style={styles.ratingStar} />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <Text style={styles.dokuTitle}>Dokumentasi</Text>
          <SlideGambar />
          <View
            style={{
              borderWidth: 1,
              borderColor: '#999',
              borderRadius: 9,
              padding: 10,
              marginBottom: 25,
              top: 25,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 10,
                flex: 1,
              }}>
              Komentar
            </Text>
            <Komentar />
          </View>
          <View style={styles.contentWrapper}>
            <TextInput title="Komentar" placeholder="Type your comment here" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SplashScreen;

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
    padding: 100,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStar: {
    fontSize: 15,
    color: '#FFA500',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFA500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    marginTop: -25,
  },
  cardTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 0,
  },
  cardContent: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    marginBottom: 15,
  },
  dokuTitle: {
    paddingVertical: 25,
    paddingRight: 100,
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 0,
  },
  ikon: {
    marginTop: -15,
  },
  ikoTextYoutube: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 14,
    color: '#C9CC29',
    marginLeft: 12,
    textDecorationLine: 'underline',
  },
  ikoTextWaktu: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 14,
    color: '#349BD6',
    marginLeft: 4,
  },
  ikoText: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 14,
    marginLeft: 8,
  },
  contentWrapper: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 9,
    padding: 1,
    marginBottom: 30,
    top: 25,
  },
});
