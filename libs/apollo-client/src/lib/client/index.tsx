import { ApolloClient, InMemoryCache } from '@apollo/client';

import typeDefs from './schema.graphql';
import resolvers from './resolvers';

export const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    typeDefs,
    resolvers,
  });

export default createApolloClient;
