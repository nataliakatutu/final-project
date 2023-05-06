import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  {
    id: '1',
    image: require('../../assets/icons/Pall5.jpg'),
    title: 'Image 1',
  },
  {
    id: '2',
    image: require('../../assets/icons/Pall2.jpg'),
    title: 'Image 2',
  },
  {
    id: '3',
    image: require('../../assets/icons/Pall3.jpg'),
    title: 'Image 3',
  },
  {
    id: '4',
    image: require('../../assets/icons/Pall4.jpg'),
    title: 'Image 4',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item, index}) {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Carousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={300}
          itemWidth={250}
          onSnapToItem={index => this.setState({activeSlide: index})}
        />
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                this.state.activeSlide === index && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
  },
  slide: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 250,
    height: 150,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: '#999',
  },
  paginationDotActive: {
    backgroundColor: '#333',
  },
});