import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import dotenv from "dotenv";

import { ApolloLink, HttpLink } from "apollo-boost";

dotenv.config(); // ------------> having issues with using vue default way of loading envs

const ENDPOINT: string = process.env.VUE_GRAPHQL_ENDPOINT;
// CHECK HOW TO LOAD ENV VARS IN VUE
console.log(ENDPOINT, "ENDPOINTS");

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
      uri: ENDPOINT || "http://127.0.0.1:8080/v1/graphql" // MY LOCAL ENDPOINT
    })
  ]),
  cache: new InMemoryCache()
});

export default apolloClient;
