import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Header} from '../../components';
import Gap from '../../components/atoms/Gap';
import {DraftIcon, HomeIcon, ProfilePhoto} from '../../assets';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <Header title="Money Tracker" subtitle="Track your money" />
      <Gap height={20} /> */}
      <View style={styles.header}>
        <Text style={styles.title}>Money Tracker</Text>
        <Text style={styles.subtitle}>Track your money</Text>
        <ProfilePhoto style={styles.images} />
      </View>
      <Gap height={20} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Your Balance</Text>
        <View style={styles.totalMoney}>
          <Text style={styles.Nominal}>Rp.10.000.000</Text>
        </View>
        <Gap height={25} />
        <Text style={styles.Cash}>Cash on Hand Rp.4.000.000</Text>
        <Gap height={14} />
        <Text style={styles.Cash}>Cash on Bank Rp.6.000.000</Text>
      </View>
      <Gap height={20} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Add Transaction</Text>
        <Gap height={10} />
        <Button
          title="Cash on Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={20} />
        <Button
          title="Cash on Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
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
    right: 176,
  },
  images: {
    width: 45,
    height: 45,
    borderRadius: 20,
    top: 10,
  },
  container: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 26,
  },
  totalMoney: {
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontWeight: '500',
  },
  Nominal: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: 'black',
  },
  Cash: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    flexDirection: 'row',
  },
  navBar: {
    flex: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
