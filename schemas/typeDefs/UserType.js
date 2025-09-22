import graphql, {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
} from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        total: { type: GraphQLInt },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        UserAdmin: { type: GraphQLInt },
    })
})