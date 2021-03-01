import { ApolloClient, InMemoryCache } from '@apollo/client';

import apiHost from './apiHost';

const createApolloClient = () => {
  return new ApolloClient({
    uri: `http://${apiHost}:5000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;