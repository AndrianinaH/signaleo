import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../..';
import CoVoiturageScreen from '../../../screens/CoVoiturage/CoVoiturageScreen';

const CoVoiturageStack = createStackNavigator();

const CoVoiturageStackScreen = () => {
  return (
    <CoVoiturageStack.Navigator>
      <CoVoiturageStack.Screen
        name={ROUTES.CoVoiturage}
        component={CoVoiturageScreen}
      />
    </CoVoiturageStack.Navigator>
  );
};

export default CoVoiturageStackScreen;
