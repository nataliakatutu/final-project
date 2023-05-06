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
import {DraftIcon, HomeIcon, ProfilePhoto} from '../../assets';
import {Search} from '../../assets';
import Gambargambar from './Gambargambar';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <Header title="Money Tracker" subtitle="Track your money" />
      <Gap height={20} /> */}
      <View style={styles.header}>
        <Text style={styles.title}>BAPONTAR</Text>
        <Text style={styles.subtitle}>Gasss Kuy!!!</Text>
        <Search left={100} />
      </View>
      <Gap height={20} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Silahkan pilih destinasi</Text>
        <Gap height={25} />
        <Gap height={14} />
      </View>
      <Gambargambar />
      <Gap height={25} />
      <View style={styles.navBar}>
        <TouchableOpacity activeOpacity={0.7}>
          <View>
            <HomeIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
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
    paddingVertical: 35,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    top: 30,
    right: 140,
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
    flex: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
