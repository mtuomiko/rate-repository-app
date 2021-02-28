import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10 + Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 10,
  },
});

const AppBar = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to='/' name='Repositories' />
        <AppBarTab to='/signin' name='Sign in' />
      </ScrollView>
    </View>
  );
};

export default AppBar;