import React, { ReactNode } from 'react';
import { Text as NativeText, StyleSheet, TextProps } from 'react-native';
import theme, { Colors, FontSizes, FontWeights } from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorOffWhite: {
    color: theme.colors.offWhite,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

interface Props extends TextProps {
  children?: ReactNode;
  color?: Colors;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
}

const Text = ({ color, fontSize, fontWeight, style, ...props }: Props) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'offWhite' && styles.colorOffWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;