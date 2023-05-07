import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PagesDanauLinow,
  SignIn,
  SignUp,
  SplashScreen,
  PagesBukitDoa,
  PagesBentengMoraya,
} from '../pages';

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
      <Stack.Screen
        name="PagesBukitDoa"
        component={PagesBukitDoa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesBentengMoraya"
        component={PagesBentengMoraya}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
