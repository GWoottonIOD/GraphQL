export const typeDefs = `#graphql
    type Query {
        debts: [Debts]
        users: [Users]
        payments: [Payments]
    }
    type Debts {
        id: Int!
        userID: Int!
        duedate: Date!
        total: Int!
        paid: Boolean!
        amount: Int!
        createdAt: Date!
        updatedAt: Date!
    }   

    type Users {
        id: Int!
        name: String!
        total: Int!
        username: String!
        password: String!
        UserAdmin: Int!
    }

    type Payments {
        id: Int!
        userID: Int!
        amount: Int!
        createdAt: Date!
        updatedAt: Date!
    }
        `