import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

export default new ApolloClient({
  // Provide the URL to the API server.
  link,
  cache: new InMemoryCache()
})
