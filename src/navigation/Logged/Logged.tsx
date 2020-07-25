import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import ROUTES from '..';

const Stack = createStackNavigator();

const Logged = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.Home} component={BottomTabs} />
      {/* place other route here */}
    </Stack.Navigator>
  );
};

export default Logged;
