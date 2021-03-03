import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

interface Props {
  name: string;
  to?: string;
  action?: () => void;
}

const AppBarTab = ({ name, to, action }: Props): JSX.Element => {
  const text = <Text fontSize='subheading' color='offWhite' fontWeight='bold'>{name}</Text>;
  return (
    <View style={styles.container}>
      {to
        ? <Link to={to} component={TouchableOpacity} activeOpacity={0.5}>{text}</Link>
        : <TouchableOpacity onPress={action} activeOpacity={0.5}>{text}</TouchableOpacity>
      }
    </View>
  );
};

export default AppBarTab;