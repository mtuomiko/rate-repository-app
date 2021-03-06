import React from 'react';
import Text from './Text';
import { StyleSheet, View, ViewProps } from 'react-native';
import numberFormat from '../utils/numberFormat';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});



interface Props extends ViewProps {
  count: number;
  name: string;
}

const Count = ({ count, name, testID }: Props): JSX.Element => {
  return (
    <View testID={testID} style={styles.container}>
      <View>
        <Text fontSize='subheading' fontWeight='bold'>{numberFormat(count)}</Text>
      </View>
      <View>
        <Text fontSize='subheading'>{name}</Text>
      </View>
    </View>
  );
};

export default Count;