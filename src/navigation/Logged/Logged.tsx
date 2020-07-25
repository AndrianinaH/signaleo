import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeStackScreen from './Home/HomeStackScreen';

/**
 * https://callstack.github.io/react-native-paper/bottom-navigation.html
 */

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const WawaRoute = () => <Text>wawa</Text>;

const Logged = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'actu', title: "Fil d'actu", icon: 'newspaper-variant' },
    { key: 'co-voiturage', title: 'Co-voiturage', icon: 'car' },
    { key: 'stat-covid19', title: 'Stat covid19', icon: 'virus-outline' },
    { key: 'station-service', title: 'Station service', icon: 'gas-station' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    actu: HomeStackScreen,
    'co-voiturage': AlbumsRoute,
    'stat-covid19': RecentsRoute,
    'station-service': WawaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Logged;
