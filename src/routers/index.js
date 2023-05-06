import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PagesDanauLinow,
  SignIn,
  PagesPantaiPall,
  Home,
  PagesBunaken,
} from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="PagesBunaken"
        component={PagesBunaken}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="PagesDanauLinow"
        component={PagesDanauLinow}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="PagesPantaiPall"
        component={PagesPantaiPall}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Routers;
