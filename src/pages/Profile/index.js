import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {HomeIconOff, IconLoveRed, IconSetting, DraftIconOn} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import Gap from '../../components/atoms/Gap';

const ProfileScreen = ({navigation}) => {
  const {navigate} = useNavigation();

  const navigateToHome = () => {
    navigate('Home');
  };

  const [animation, setAnimation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/icons/profil-woman.jpg')}
          />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Sherren Kalalo</Text>
          <Text style={styles.profileEmail}>sherrenhatestaylor@gmail.com</Text>
          <Text style={styles.profilePhone}>+628123456789</Text>
        </View>
      </View>

      <Gap height={5} />
      <Text style={styles.title}>Favorit</Text>
      <Gap height={5} />
      <View style={styles.fav}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/icons/BD1.jpg')}
          />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Bukit Doa</Text>
            <IconLoveRed name="icon-love" size={30} color="#fff" />
          </View>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.fav}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/icons/PL1.jpg')}
          />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Pulau Lembeh</Text>
            <IconLoveRed name="icon-love" size={30} color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={navigateToHome} activeOpacity={0.7}>
          <View>
            <HomeIconOff style={{marginTop: -12}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.7}>
          <View>
            <DraftIconOn style={{left: -4}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 26,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  profileImageContainer: {
    width: 130,
    height: 130,
    borderRadius: 80,
    overflow: 'hidden',
    marginBottom: 16,
    marginRight: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
    marginTop: -11,
  },
  profileEmail: {
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 9,
  },
  profilePhone: {
    fontSize: 13,
    marginTop: 6,
    marginLeft: 9,
  },

  favoritoImage: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
  },
  fav: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imageText: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF0058',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  fav: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overlayText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  navBar: {
    flex: 0.9,
    width: 420,
    left: -27,
    borderTopColor: '#fff',
    borderTopColor: '',
    backgroundTopColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 30,
  },
});

export default ProfileScreen;
