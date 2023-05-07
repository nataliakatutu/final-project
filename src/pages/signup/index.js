import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput} from '../../components';
import Gap from '../../components/atoms/Gap';
import {Logo} from '../../assets';
const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" />
      <View style={styles.contentWrapper}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Gap height={90} />
        <View class="padding" style={{paddingBottom: 50}}>
          <TextInput title="Full Name" placeholder="Type your full name" />
          <Gap height={16} />
          <TextInput
            title="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput title="Password" placeholder="Type your password" />
          <Gap height={60} />

          <Button
            title="Sign Up"
            color="#92F0F6"
            textColor="black"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 24,
    paddingTop: 24,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
