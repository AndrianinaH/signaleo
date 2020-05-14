import React from 'react';
import ROUTES from '..';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignupScreen from '../../screens/Auth/Signup/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';

interface Props {}

const Stack = createStackNavigator();

const NotLogged = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
      <Stack.Screen name={ROUTES.Signup} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default NotLogged;
