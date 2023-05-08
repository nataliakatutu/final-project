import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image: require('../../assets/icons/TN1.jpg'),
        },
        {
          image: require('../../assets/icons/TN2.jpg'),
        },
        {
          image: require('../../assets/icons/TN3.jpg'),
        },
        {
          image: require('../../assets/icons/TN4.jpg'),
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          borderRadius: 25,
          height: 230,
          marginLeft: 25,
        }}>
        <ImageBackground
          source={item.image}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            borderRadius: 25,
          }}
          imageStyle={{borderRadius: 9}}></ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={100}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
