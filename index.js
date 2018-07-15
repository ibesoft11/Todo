const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todoApp");

const Todo = mongoose.model("Todo",{
    text: String,
    complete: Boolean
});

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type Todo {
      id: ID!
      text: String!
      complete: Boolean!
  }
  type Mutation {
      createTodo(text: String!): Todo!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.Connection.once("open", function(){
    server.start(() => console.log('Server is running on localhost:4000'))
});
