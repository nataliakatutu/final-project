import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Home, Search, TamanNasional} from '../../assets';
import SlideGambar from './slidegambar.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PageTamanNasional = ({navigation}) => {
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
        <TamanNasional />
        <View
          style={{
            position: 'absolute',
            // bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Text style={styles.textPict}>TamanNasional</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>Deskripsi</Text>
        </View>
        <Text style={styles.cardContent}>
          Taman Nasional Tangkoko merupakan salah satu destinasi wisata menarik
          dan seru yang ada di Sulawesi Utara. Taman Nasional ini menjadi
          habitat bagi hewan- hewan endemik yang dilindungi.
        </Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" style={styles.ratingStar} />
          <FontAwesome name="star" style={styles.ratingStar} />
          <FontAwesome name="star" style={styles.ratingStar} />
          <FontAwesome name="star" style={styles.ratingStar} />
          <FontAwesome name="star-half-empty" style={styles.ratingStar} />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
      </View>

      <SlideGambar />
    </View>
  );
};

export default PageTamanNasional;

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
    marginBottom: -15,
  },
  cardTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
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
  cardContent: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
