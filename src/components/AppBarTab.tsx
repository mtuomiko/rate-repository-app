import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

const AppBarTab = ({ to, name }: { to: string, name: string }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Link to={to} component={TouchableOpacity} activeOpacity={0.5}>
        <Text fontSize='subheading' color='offWhite' fontWeight='bold'>{name}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;