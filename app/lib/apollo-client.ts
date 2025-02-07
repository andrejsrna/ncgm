import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:1337/graphql',
});

// Auth link pre pridanie JWT tokenu do hlavičiek
const authLink = setContext((_, { headers }) => {
  // Získame token z localStorage namiesto env premennej
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  // Vrátime hlavičky s JWT tokenom
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink), // Spojíme auth link s http linkom
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});