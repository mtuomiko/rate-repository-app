import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme from '../theme';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.kindaGrey,
  },
});

const Main = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path='/'>
          <RepositoryList />
        </Route>
        <Route path='/signIn'>
          <SignIn />
        </Route>
        <Route path='/createReview'>
          <CreateReview />
        </Route>
        <Route path='/signUp'>
          <SignUp />
        </Route>
        <Route path='/repository/:id'>
          <SingleRepository />
        </Route>
        <Redirect to='/' />
      </Switch>

    </View>
  );
};

export default Main;