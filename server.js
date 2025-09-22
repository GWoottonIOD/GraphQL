import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { connectMysql } from './dbConnect.js';
import {schema} from './schemas/index.js'

const app = express();
app.use(express.json())

app.use('/graphql', createHandler({
  schema,
  graphiql: true
}))

connectMysql()//connect to mysql

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');