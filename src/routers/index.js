import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PagesDanauLinow} from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PagesDanauLinow"
        component={PagesDanauLinow}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
