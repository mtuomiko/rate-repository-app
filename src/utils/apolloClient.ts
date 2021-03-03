import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import AuthStorage from './authStorage';

const webHost = Constants.manifest.extra.webHost;
const nativeHost = Constants.manifest.extra.nativeHost;

// For WSL2 dev environment. Native clients need the real local IP, web 
// client can access WSL with its localhost since running on the same 
// machine.
const apiHost = Platform.select({
  web: webHost,
  default: nativeHost,
});

const createApolloClient = (authStorage: AuthStorage) => {
  const httpLink = new HttpLink({ uri: `http://${apiHost}:5000/graphql` });

  const authLink = setContext(async (_, { headers }) => {
    const accessToken = await authStorage.getAccessToken();

    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;