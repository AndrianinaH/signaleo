import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../..';
import HomeScreen from '../../../screens/Home/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={ROUTES.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
