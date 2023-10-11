"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("@graphql-tools/schema");
const resolvers_1 = __importDefault(require("./resolvers"));
const type_defs_1 = __importDefault(require("./type-defs"));
const schema = (0, schema_1.makeExecutableSchema)({
    //typeDefs, resolvers
    typeDefs: type_defs_1.default,
    resolvers: resolvers_1.default
});
const server = new server_1.ApolloServer({
    schema
});
(0, standalone_1.startStandaloneServer)(server).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map