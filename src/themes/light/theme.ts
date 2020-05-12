import { DefaultTheme } from 'react-native-paper';
import Color from '../Color';

const MyLightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.white.pure,
    secondary: Color.black,
    accent: Color.white.pure,
    background: Color.white.zircon,
    text: Color.white.pure,
  },
  dark: true,
};

export default MyLightTheme;
