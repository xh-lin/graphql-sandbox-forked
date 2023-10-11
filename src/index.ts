import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"

import {makeExecutableSchema} from "@graphql-tools/schema"
import mergedResolvers from "./resolvers"
import mergeTypes from "./type-defs"

const schema = makeExecutableSchema({
  //typeDefs, resolvers
  typeDefs: mergeTypes,
  resolvers: mergedResolvers
})

const server = new ApolloServer({
  schema
})

startStandaloneServer(server).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
