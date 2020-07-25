import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../..';
import StationServiceScreen from '../../../screens/StationService/StationServiceScreen';

const StationServiceStack = createStackNavigator();

const StationServiceStackScreen = () => {
  return (
    <StationServiceStack.Navigator>
      <StationServiceStack.Screen
        name={ROUTES.StationService}
        component={StationServiceScreen}
      />
    </StationServiceStack.Navigator>
  );
};

export default StationServiceStackScreen;
