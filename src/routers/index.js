import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PagesDanauLinow, SignIn, SignUp, SplashScreen} from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesDanauLinow"
        component={PagesDanauLinow}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
