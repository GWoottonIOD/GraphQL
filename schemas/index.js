import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import debtController from '../controllers/index.js';
import { debtType } from './TypeDefs/DebtType.js';

export const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllDebts: {
      type: new GraphQLList(debtType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return debtController.getDebts();
      }
    },
    getAllDebtsBy: {
      type: new GraphQLList(debtType),
      args: { 
        filter: { type: GraphQLString },
        value: { type: GraphQLInt }
       },
      resolve(parent, args) {
        return debtController.getDebtsBy(args.filter, args.value);
      }
    }
  }
});

export const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDebt: {
      type: debtType,
      args: {
        userID: { type: GraphQLInt },
        duedate: { type: GraphQLString },
        total: { type: GraphQLInt },
        paid: { type: GraphQLBoolean },
        amount: { type: GraphQLInt },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        return debtController.createDebt(args)
      }
    }
  }
})

export const schema = new GraphQLSchema({ query: rootQuery, mutation: mutation })