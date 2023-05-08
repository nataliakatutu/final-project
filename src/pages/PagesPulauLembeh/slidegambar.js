import * as React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image: require('../../assets/icons/PL1.jpg'),
        },
        {
          image: require('../../assets/icons/PL2.jpg'),
        },
        {
          image: require('../../assets/icons/PL3.jpeg'),
        },
        {
          image: require('../../assets/icons/PL5.jpg'),
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
          marginLeft: 2,
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
            sliderWidth={200}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
