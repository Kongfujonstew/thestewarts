import graphqlHTTP from 'express-graphql';
import schema from './schema/';
import resolvers from './resolvers';

export default graphqlHTTP(async(req, res) => ({
  schema: schema,
  rootValue: resolvers,
  graphiql: !process.env.PRODUCTION,
  context: { req, res },
  pretty: true
}));
