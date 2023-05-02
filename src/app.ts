import  createError from 'http-errors';
import  express from 'express';
import  path from 'path';
import  cookieParser from 'cookie-parser';
import  logger from 'morgan';
import { readFileSync } from 'fs';
// import schema from './graphql/schema'
import { graphqlHTTP } from "express-graphql"
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as dotenv from 'dotenv'
import { resolvers } from './graphql/resolvers';

dotenv.config()


const app = express();
const typeDefs = readFileSync(path.join(__dirname, 'graphql/schema.graphql'), 'utf-8');


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const handler = createHandler({ schema});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



export default app;
