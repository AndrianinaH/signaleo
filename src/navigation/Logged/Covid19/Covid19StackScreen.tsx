import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../..';
import Covid19Screen from '../../../screens/Covid19/Covid19Screen';

const Covid19Stack = createStackNavigator();

const Covid19StackScreen = () => {
  return (
    <Covid19Stack.Navigator>
      <Covid19Stack.Screen name={ROUTES.Covid19} component={Covid19Screen} />
    </Covid19Stack.Navigator>
  );
};

export default Covid19StackScreen;
