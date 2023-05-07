import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

export default App;
