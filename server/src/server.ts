import "reflect-metadata";
import {
  Resolver,
  Query,
  buildSchema,
  FieldResolver,
  Ctx,
  Root,
} from "type-graphql";

import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';
import path from "path";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


import {
  //Event,
  EventRelationsResolver,
  EventCrudResolver,
  //Instrument,
  InstrumentRelationsResolver,
  InstrumentCrudResolver,
  //Profile,
  //Session,
  SessionRelationsResolver,
  SessionCrudResolver,
  //Song,
  SongRelationsResolver,
  SongCrudResolver,
  //User,
  UserRelationsResolver,
  UserCrudResolver,
} from "../prisma/generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}


export const isDev = () => process.env.NODE_ENV === 'development';
const landingPagePlugin = isDev()
  ? ApolloServerPluginLandingPageGraphQLPlayground
  : ApolloServerPluginLandingPageDisabled;

async function main() {
  const schema = await buildSchema({
    resolvers: [
      //Event,
      EventRelationsResolver,
      EventCrudResolver,
      //Instrument,
      InstrumentRelationsResolver,
      InstrumentCrudResolver,
      //Profile,
      //Session,
      SessionRelationsResolver,
      SessionCrudResolver,
      //Song,
      SongRelationsResolver,
      SongCrudResolver,
      //User,
      UserRelationsResolver,
      UserCrudResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  const port = process.env.PORT || 4000;

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    plugins: [landingPagePlugin()]
  });

  await server.listen({ port }).then(({url}) => console.log(`🚀 GraphQL Server is ready at: ${url}`));
}

main().catch(console.error);
