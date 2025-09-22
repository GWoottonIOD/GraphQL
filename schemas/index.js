import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { DebtController, UserController } from '../controllers/index.js';
import { DebtType } from './TypeDefs/DebtType.js';
import { UserType } from './TypeDefs/UserType.js';

export const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllDebts: {
      type: new GraphQLList(DebtType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return DebtController.getDebts();
      }
    },
    getAllDebtsBy: {
      type: new GraphQLList(DebtType),
      args: {
        filter: { type: GraphQLString },
        value: { type: GraphQLInt }
      },//return promise from imported function with args
      resolve(parent, args) {
        return DebtController.getDebtsBy(args);
      }
    },
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return UserController.getUsers();
      }
    },
    getAllUsersBy: {
      type: new GraphQLList(UserType),
      args: {
        filter: { type: GraphQLString },
        value: { type: GraphQLString }
      },
      resolve(parent, args) {
        return UserController.getUsersBy(args);
      }
    },
    loginUser: {
      type: new GraphQLList(UserType),
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        token: { type: GraphQLString }
      },
      resolve(parent, args) {
        return UserController.loginUser(args)
      }
    }
  }
});

const debtArgs = {
  id: { type: GraphQLInt },
  userID: { type: GraphQLInt },
  duedate: { type: GraphQLString },
  total: { type: GraphQLInt },
  paid: { type: GraphQLBoolean },
  amount: { type: GraphQLInt },
  filter: { type: GraphQLString },
  value: { type: GraphQLInt }
}

const userArgs = {
  id: { type: GraphQLInt },
  name: { type: GraphQLString },
  total: { type: GraphQLInt },
  username: { type: GraphQLString },
  password: { type: GraphQLString },
  UserAdmin: { type: GraphQLInt },
  filter: { type: GraphQLString },
  value: { type: GraphQLString }
}

export const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDebt: {//mutation query
      type: DebtType,
      //as TypeDef but without id as it is autoincremental
      args: debtArgs,
      resolve(parent, args) {//return promise from imported function
        return DebtController.createDebt(args)
      }
    },
    updateDebtsBy: {
      type: DebtType,
      args: debtArgs,
      //pass filter and value into args object
      resolve(parent, args) {
        return DebtController.updateDebtsBy(args)
      }
    },
    deleteDebtsBy: {
      type: DebtType,
      args: debtArgs,
      resolve(parent, args) {
        return DebtController.deleteDebtsBy(args)
      }
    },
    createUser: {
      type: UserType,
      args: userArgs,
      resolve(parent, args) {
        return UserController.createUser(args)
      }
    },
    updateUsersBy: {
      type: UserType,
      args: userArgs,
      resolve(parent, args) {
        return UserController.updateUsersBy(args)
      }
    },
    deleteUsersBy: {
      type: UserType,
      args: userArgs,
      resolve(parent, args) {
        return UserController.deleteUsersBy(args)
      }
    }
  }
})

export const schema = new GraphQLSchema({ query: rootQuery, mutation: mutation })