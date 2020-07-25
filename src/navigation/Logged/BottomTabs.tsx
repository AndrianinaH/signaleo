import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CoVoiturageScreen from '../../screens/CoVoiturage/CoVoiturageScreen';
import Covid19Screen from '../../screens/Covid19/Covid19Screen';
import StationServiceScreen from '../../screens/StationService/StationServiceScreen';
import HomeScreen from '../../screens/Actu/ActuScreen';
import ActuScreen from '../../screens/Actu/ActuScreen';

/**
 * https://callstack.github.io/react-native-paper/bottom-navigation.html
 */

const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'actu', title: "Fil d'actu", icon: 'newspaper-variant' },
    { key: 'co-voiturage', title: 'Co-voiturage', icon: 'car' },
    { key: 'stat-covid19', title: 'Stat covid19', icon: 'virus-outline' },
    { key: 'station-service', title: 'Station service', icon: 'gas-station' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    actu: ActuScreen,
    'co-voiturage': CoVoiturageScreen,
    'stat-covid19': Covid19Screen,
    'station-service': StationServiceScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabs;
