import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';

const { createContext } = require('./context')
const { schema } = require('./schema')


const server = new ApolloServer({
  schema,
  context: createContext,
  plugins: [
    ApolloServerPluginLandingPageDisabled()
  ]
})

const port = process.env.PORT || 4000

server.listen({ port }).then(({ url }) => console.log(`🚀 Server ready at: ${url}`))
