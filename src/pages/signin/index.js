import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput} from '../../components';
import Gap from '../../components/atoms/Gap';
import {Logo} from '../../assets';
const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="WELCOME" />
      <View style={styles.contentWrapper}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Gap height={90} />
        <View class="padding" style={{paddingBottom: 50}}>
          <TextInput
            title="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput title="Password" placeholder="Type your password" />
          <Gap height={60} />
          <Button
            title="Sign In"
            color="#92F0F6"
            onPress={() => navigation.navigate('Home')}
          />
          <Gap height={20} />
          <Button
            title="Create New Account"
            color="#8D92A3"
            textColor="white"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 23,
    marginTop: 24,
    paddingTop: 24,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
