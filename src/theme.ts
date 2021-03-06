import { Platform, TextStyle } from 'react-native';

const typedRecord = <TValue>() => <T extends Record<PropertyKey, TValue>>(v: T): T => v;

export type Colors = keyof typeof colors;
export type FontSizes = keyof typeof fontSizes;
export type Fonts = keyof typeof fonts;
export type FontWeights = keyof typeof fontWeights;

const colors = typedRecord<TextStyle['color']>()({
  textPrimary: '#24292e',
  textSecondary: '#586069',
  primary: '#0366d6',
  offWhite: '#f1f2f3',
  kindaGrey: '#e1e4e8',
  error: '#d73a4a',
});

const fontSizes = typedRecord<TextStyle['fontSize']>()({
  body: 14,
  subheading: 16,
});

const fonts = typedRecord<TextStyle['fontFamily']>()({
  main: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System',
  })
});

const fontWeights = typedRecord<TextStyle['fontWeight']>()({
  normal: '400',
  bold: '700',
});

const theme = {
  colors,
  fontSizes,
  fonts,
  fontWeights,
};

export default theme;