import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import Gap from '../../components/atoms/Gap';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    id: 1,
    title: 'Benteng Moraya',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1549881406/rzqo374p06eopqj2j1gw.jpg',
  },
  {
    id: 2,
    title: 'Bukit Doa',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://traverse.id/wp-content/uploads/2020/01/Bukitdoamawahu5.jpg',
  },
  {
    id: 3,
    title: 'Bukit Kasih',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://wisato.id/wp-content/uploads/2020/05/Bukit-Kasih-Kanonang-8.jpg',
  },
  {
    id: 4,
    title: 'Bunaken',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://mundomaya.travel/wp-content/uploads/2021/07/Taman-Nasional-Bunaken-Taman-Laut-Bunaken.jpg',
  },
  {
    id: 5,
    title: 'Danau Linow',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://cdn.idntimes.com/content-images/community/2022/02/20220220-214114-329ae2b286ff7799fbbec7d4597d307a-a6b07eba2c9b1ebcf3c3a286d53dd1db.jpg',
  },
  {
    id: 6,
    title: 'Hutan Pinus Lahendong',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://www.celebes.co/wp-content/uploads/2021/11/Hutan-Pinus-Tomohon.jpg',
  },
  {
    id: 7,
    title: 'Pantai Pall',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://blog.tiket.com/wp-content/uploads/Keindahan-Pantai-Paal-di-Likupang_Blog-new-update-mei2020-Bersantai-di-Pantai-Paal-1.jpg',
  },
  {
    id: 8,
    title: 'Pulau Lembeh',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://i0.wp.com/www.pesisir.net/wp-content/uploads/2021/09/Daya-Tarik-Pulau-Lembeh.jpg?resize=708%2C354&ssl=1',
  },
  {
    id: 9,
    title: 'Pulau Lihaga',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://waktu.news/wp-content/uploads/2020/12/pulau-lihaga.jpg',
  },
  {
    id: 10,
    title: 'Taman Nasional Tangkoko',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://www.mongabay.co.id/wp-content/uploads/2013/07/yaki111-20130701_134719.jpg',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  // const navigateToPage = item => {
  //   navigation.navigate('PagesBentengMoraya');
  // };
  const navigateToPage = id => {
    switch (id) {
      case 1:
        navigation.navigate('PagesBentengMoraya');
        break;
      case 2:
        navigation.navigate('PagesBukitDoa');
        break;
      case 3:
        navigation.navigate('PagesBukitKasih');
        break;
      case 4:
        navigation.navigate('PagesBunaken');
        break;
      case 5:
        navigation.navigate('PagesDanauLinow');
        break;
      case 6:
        navigation.navigate('PagesLahendong');
        break;
      case 7:
        navigation.navigate('PagesPantaiPall');
        break;
      case 8:
        navigation.navigate('PagesPulauLembeh');
        break;
      case 9:
        navigation.navigate('PagesPulauLihaga');
        break;
      case 10:
        navigation.navigate('PagesTamanNasional');
        break;
      default:
        break;
    }
  };

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity onPress={() => navigateToPage(item.id)}>
        <View style={styles.item}>
          <ParallaxImage
            source={{uri: item.illustration}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.1}
            {...parallaxProps}
          />
          <Gap height={30} />
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const pagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {entries.map((_, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                activeSlide === index && styles.paginationDotActive,
              ]}
              onPress={() => {
                carouselRef.current.snapToItem(index);
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth - 50}
        sliderHeight={screenWidth - 10}
        itemWidth={screenWidth - 5}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={index => setActiveSlide(index)}
      />
      {pagination()}
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 52,
    height: screenWidth - 0,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    top: -40,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '#999',
  },
  paginationDotActive: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
    textShadowColor: '#808080',
    textShadowOffset: {width: 0.1, height: 0.1},
    textShadowRadius: 1,
    top: -2,
  },
});
