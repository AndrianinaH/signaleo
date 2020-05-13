/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MyDarkTheme from './src/themes/dark/theme';
import MyLightTheme from './src/themes/light/theme';
import { NavigationContainer } from '@react-navigation/native';
import AuthControlNavigator from './src/navigation/AuthControl/AuthControlNavigator';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <PaperProvider theme={isDarkMode ? MyDarkTheme : MyLightTheme}>
      <NavigationContainer>
        <AuthControlNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
