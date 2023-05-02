import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import Gap from '../../atoms/Gap';

const Header = ({title, onBack, subtitle}) => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          {onBack && (
            <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
              <View style={styles.back}>
                <IconBack />
              </View>
            </TouchableOpacity>
          )}
          <Gap width={26} />
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  back: {
    padding: 10,
  },
  subtitle: {},
});
