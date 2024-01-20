import { not, shield } from "graphql-shield";

import { isAuthorized } from './rules/index.js'

export const permissions = shield({
  Query: {},
  Mutation: {
    deleteTask: isAuthorized,
    addTask: isAuthorized,
  }
},
{
  allowExternalErrors: true,
  debug: true,
});