import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import {DanauLinow, Home} from '../../assets';
import {Search} from '../../assets';
import {Bunaken} from '../../assets';
import {IconBack} from '../../assets';
import {Image} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import SlideGambar from './slidegambar';

const SplashScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#0000'} barStyle={'dark-content'} />
        {/* <View style={styles.navBar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            activeOpacity={0.7}>
            <View>
              <Home />
            </View>
          </TouchableOpacity>
          <Text style={styles.namaapp}>BAPONTAR</Text>
          <Search />
        </View> */}
        <View>
          <Bunaken />
          <TouchableOpacity
            style={{position: 'absolute', top: 20, left: 20}}
            onPress={() => this.props.navigation.goBack()}>
            <IconBack name="icon-back" size={30} color="#fff" />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              // bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Text style={styles.textPict}>Bunaken</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deskripsi</Text>
          <Text style={styles.cardContent}>
            Bunaken adalah sebuah pulau seluas 8,08 km² di Teluk Manado, yang
            terletak di utara pulau Sulawesi, Indonesia. Pulau ini merupakan
            bagian dari kota Manado, ibu kota provinsi Sulawesi Utara,
            Indonesia.
          </Text>
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
    padding: 90,
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
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  dokuTitle: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingRight: 100,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});
