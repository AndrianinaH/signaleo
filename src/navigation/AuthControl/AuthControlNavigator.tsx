import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TokenManager from '../../services/TokenManager';
import HomeScreen from '../../screens/Home/HomeScreen';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ROUTES from '..';

const Stack = createStackNavigator();

const AuthControlNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initApp = async () =>
    TokenManager.getToken().then((token) => {
      TokenManager.isAuthenticate().then((isAuth) => {
        setIsLoggedIn(isAuth);
      });
    });

  useEffect(() => {
    initApp();
  }, []);

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
      ) : (
        <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AuthControlNavigator;
