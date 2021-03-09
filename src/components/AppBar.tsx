import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10 + Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 10,
  },
});

const AppBar = (): JSX.Element => {
  const { authorizedUser } = useAuthorizedUser();
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  console.log('user', authorizedUser);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to='/' name='Repositories' />
        {authorizedUser &&
          <AppBarTab to='/createReview' name='Create a review' />
        }
        {authorizedUser
          ? <AppBarTab name='Sign out' action={signOut} />
          : <>
            <AppBarTab to='/signIn' name='Sign in' />
            <AppBarTab to='signUp' name='Sign up' />
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;