import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const webHost = Constants.manifest.extra.webHost;
const nativeHost = Constants.manifest.extra.nativeHost;

// For WSL2 dev environment. Native clients need the real local IP, web 
// client can access WSL with its localhost since running on the same 
// machine.
const apiHost = Platform.select({
  web: webHost,
  default: nativeHost,
});

const createApolloClient = () => {
  return new ApolloClient({
    uri: `http://${apiHost}:5000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;