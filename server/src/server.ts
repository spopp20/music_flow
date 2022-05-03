import { ApolloServer } from 'apollo-server'
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from "apollo-server-core";

const { createContext } = require('./context')
const { schema } = require('./schema')

export const isDev = () => process.env.NODE_ENV === 'development'
const landingPagePlugin = isDev() ? ApolloServerPluginLandingPageGraphQLPlayground : ApolloServerPluginLandingPageDisabled


const server = new ApolloServer({
  schema,
  context: createContext,
  plugins: [
    landingPagePlugin()
  ]
})

const port = process.env.PORT || 4000

server.listen({ port })
  .then(({ url }) => console.log(`🚀 Server ready at: ${url}`))
