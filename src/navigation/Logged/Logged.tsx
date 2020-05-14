import React from 'react';
import ROUTES from '..';
import HomeScreen from '../../screens/Home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

interface Props {}

const Stack = createStackNavigator();

const Logged = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Logged;
