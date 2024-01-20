import { makeExecutableSchema } from "@graphql-tools/schema";
import fastify from "fastify";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./graphql/index.js";
import { permissions } from "./guards/index.js";
import { createApolloServer } from "./apollo/index.js";
import { databaseConnection } from "./db/index.js";
import cors from '@fastify/cors';
import fastifyApollo from "@as-integrations/fastify";

export const startApolloServer = async () => {

  dotenv.config();

  const app = fastify();

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = createApolloServer([permissions], { app, schema });
  await server.start();

  await databaseConnection.sync();

  const myContextFunction = async (request, reply) => ({
    authorization: request.headers.authorization,
  });

  await app.register(fastifyApollo(server), {
    context: myContextFunction,
  })
  await app.register(cors, {origin: "*",
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']});

  await app.listen({port: 4000});
};
