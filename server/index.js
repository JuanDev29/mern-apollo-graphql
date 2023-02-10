import { startServer } from './app.js'
import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js'

startServer( typeDefs, resolvers )