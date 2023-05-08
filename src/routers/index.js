import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PagesPulauLihaga,
  PagesPulauLembeh,
  PagesDanauLinow,
  SignIn,
  SignUp,
  SplashScreen,
  PagesBukitDoa,
  PagesBentengMoraya,
  PagesBukitKasih,
  PagesTamanNasional,
  PagesPantaiPall,
  PagesLahendong,
  PagesBunaken,
  Home,
  Profile,
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
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesDanauLinow"
        component={PagesDanauLinow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesPulauLihaga"
        component={PagesPulauLihaga}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesPulauLembeh"
        component={PagesPulauLembeh}
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
      <Stack.Screen
        name="PagesBukitKasih"
        component={PagesBukitKasih}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesBunaken"
        component={PagesBunaken}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesTamanNasional"
        component={PagesTamanNasional}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesLahendong"
        component={PagesLahendong}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PagesPantaiPall"
        component={PagesPantaiPall}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
