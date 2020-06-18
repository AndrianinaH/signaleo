import React from 'react';
import ROUTES from '..';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignupScreen from '../../screens/Auth/Signup/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';

interface Props {
  isSignout?: boolean;
}

const Stack = createStackNavigator();

const NotLogged = (props: Props) => {
  const { isSignout } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.Login}
        component={LoginScreen}
        options={{
          title: 'Sign in',
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isSignout ? 'pop' : 'push',
        }}
      />
      <Stack.Screen name={ROUTES.Signup} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default NotLogged;
