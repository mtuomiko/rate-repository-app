import React from 'react';
import Text from './Text';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const numberShorthand = (num: number): string => {
  return num >= 1000
    ? `${(num / 1000).toFixed(1)}k`
    : num.toFixed(0);
};

const Count = ({ count, name }: { count: number, name: string }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Text fontSize='subheading' fontWeight='bold'>{numberShorthand(count)}</Text>
      </View>
      <View>
        <Text fontSize='subheading'>{name}</Text>
      </View>
    </View>
  );
};

export default Count;