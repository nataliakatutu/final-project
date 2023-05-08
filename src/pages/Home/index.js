import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Button, Header} from '../../components';
import Gap from '../../components/atoms/Gap';
import {DraftIcon, HomeIcon, ProfilePhoto, Logokecil} from '../../assets';
import Gambargambar from './Gambargambar';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <Header title="Money Tracker" subtitle="Track your money" />
      <Gap height={20} /> */}
      <View style={styles.header}>
        <Text style={styles.title}>bap</Text>
        <Logokecil top={-8} />
        <Text style={styles.title}>ntar</Text>
        <Text style={styles.subtitle}>Gasss kuy!!!</Text>
      </View>
      <Gap height={10} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Silahkan pilih destinasi:</Text>
        <Gap height={30} />
        <Gambargambar />
      </View>
      <Gap height={10} />
      <View style={styles.navBar}>
        <TouchableOpacity activeOpacity={0.7}>
          <View>
            <HomeIcon style={{marginTop: -12}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.7}>
          <View>
            <DraftIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 25,
  },
  title: {
    top: -8,
    fontSize: 50,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    top: 38,
    right: 141,
    marginLeft: -118,
  },
  container: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 26,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontWeight: '500',
  },
  navBar: {
    flex: 0.26,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
