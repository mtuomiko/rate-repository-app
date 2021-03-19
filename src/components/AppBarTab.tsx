import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
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

const AppBarTab = ({ name, to, action }: Props) => {
  const text = <Text fontSize='subheading' color='offWhite' fontWeight='bold'>{name}</Text>;
  return (
    <View style={styles.container}>
      {to
        ? <Link to={to} component={Pressable}>{text}</Link>
        : <Pressable onPress={action}>{text}</Pressable>
      }
    </View>
  );
};

export default AppBarTab;