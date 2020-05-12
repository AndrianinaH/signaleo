import { RFValue } from 'react-native-responsive-fontsize';
// doc : https://github.com/heyman333/react-native-responsive-fontsize

const fontFamily = {
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace',
};
const fontWeight = {
  light: '200' as '200',
  normal: '300' as '300',
  regular: '500' as '500',
  medium: '600' as '600',
  heavy: '800' as '800',
  bold: 'bold' as 'bold',
  headings: 'bold' as 'bold',
};
const fontSizes = {
  extraSmall: RFValue(12, 680),
  small: RFValue(14, 680),
  regular: RFValue(16, 680),
  medium: RFValue(18, 680),
  large: RFValue(22, 680),
  extraLarge: RFValue(30, 680),
  icon: RFValue(25, 680),
  iconLarge: RFValue(35, 680),
  iconXtraLarge: RFValue(40, 680),
};

export default {
  fontSizes,
  fontWeight,
  fontFamily,
  fontFamilyBase: fontFamily.system,
  fontFamilyHeadings: fontFamily.mono,
};
