import { ApolloServer } from "apollo-server";

async function startApolloServer(typeDefs, resolvers) {
  const port = process.env.PORT || 9090;

  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen({ port });

  console.log(`🚀 Server ready at ${url}`);
}
