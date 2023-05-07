import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {
  DanauLinow,
  BukitDoa,
  Home,
  Search,
  IconLove,
  IconBack,
} from '../../assets';
import {Image} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import SlideGambar from './slidegambar';
import Komentar from './komentar';

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
          <BukitDoa />
          <View
            style={{
              position: 'absolute',
              // bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Text style={styles.textPict}>Bukit Doa</Text>
            <TouchableOpacity
              style={{position: 'absolute', top: 20, left: 30}}
              onPress={() => navigation.goBack()}>
              <IconBack name="icon-back" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 30}}
              onPress={() => navigation.goBack()}>
              <IconLove name="icon-love" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deskripsi</Text>
          <Text style={styles.cardContent}>
            Bukit Doa Tomohon merupakan salah satu objek wisata alam yang juga
            menjadi tempat wisata religi. Bukit Doa Mahawu dibuka pertama kali
            pada tahun 2006, tepatnya tanggal 14 September bertepatan dengan
            hari raya Salib Suci.
          </Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star-o" style={styles.ratingStar} />
            <Text style={styles.ratingText}>4</Text>
          </View>
          <Text style={styles.dokuTitle}>Dokumentasi</Text>
          <SlideGambar />
          <View
            style={{
              borderWidth: 1,
              borderColor: '#999',
              borderRadius: 9,
              padding: 10,
              marginBottom: 10,
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
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 14,
    marginTop: 0,
    paddingTop: 26,
    top: 18,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
});
