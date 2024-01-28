import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen/index';
import SplashScreen from '../../screens/SplashScreen/index';
import AddPost from '../../screens/AddPost';
import FormScreen from '../../screens/FormScreen/FormScreen';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="form" component={FormScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="addPost" component={AddPost} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
