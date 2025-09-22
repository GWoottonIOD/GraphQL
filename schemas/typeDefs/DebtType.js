import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

export const DebtType = new GraphQLObjectType({
  name: "debt",
  fields: () => ({
    id: { type: GraphQLInt },
    userID: { type: GraphQLInt },
    duedate: { type: GraphQLString },
    total: { type: GraphQLInt },
    paid: { type: GraphQLBoolean },
    amount: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
})