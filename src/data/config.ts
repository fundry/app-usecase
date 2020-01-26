import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

import { ApolloLink, HttpLink } from 'apollo-boost';

// from d vue-apollo docs ===============>>
// const httpLink = createHttpLink({
//   uri: process.env.GRAPHQL_ENDPOINT,
// });

// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// });
// const cache = new InMemoryCache();

const ENDPOINT: string = process.env.GRAPHQL_ENDPOINT;
// CHECK HOW TO LOAD ENV VARS IN VUE
console.log(ENDPOINT, 'ENDPOINTS');

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: ENDPOINT,
    }),
  ]),
  cache: new InMemoryCache(),
});

export default apolloClient;
