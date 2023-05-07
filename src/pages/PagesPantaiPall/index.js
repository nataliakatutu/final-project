import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import React from 'react';
import {Home, Search, Pall, IconBack, IconLove} from '../../assets';
import SlideGambar from './slidegambar';
import Komentar from './komentar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
          <Pall />
          <View
            style={{
              position: 'absolute',
              // bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Text style={styles.textPict}>Pantai Pall</Text>
            <TouchableOpacity
              style={{position: 'absolute', top: 20, left: 20}}
              onPress={() => this.props.navigation.goBack()}>
              <IconBack name="icon-back" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>Deskripsi</Text>
          </View>
          <Text style={styles.cardContent}>
            Pantai Paal memiliki pasir putih yang lembut. Lautnya biru dan
            jernih, bahkan pengunjung yang berada di atas perahu dapat melihat
            terumbu karang di dalam laut. Ombak di pantai ini cukup besar. Jika
            sedang cerah, langit yang biru akan membuat pemandangan alam di
            sekitar pantai menjadi lebih menawan.
          </Text>

          <View style={styles.ratingContainer}>
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star" style={styles.ratingStar} />
            <FontAwesome name="star-o" style={styles.ratingStar} />
            {/* <FontAwesome name="star-half-empty" style={styles.ratingStar} /> */}
            <Text style={styles.ratingText}>4/5</Text>
          </View>
          <SlideGambar />
          <View
            style={{
              borderWidth: 1,
              borderColor: '#999',
              borderRadius: 9,
              padding: 10,
              marginBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Komentar</Text>
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
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: 'Poppins-Medium',
    color: '#FFA500',
  },
  cardContent: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 14,
    marginTop: 0,
    paddingTop: 26,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
});
