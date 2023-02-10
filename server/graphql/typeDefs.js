import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    hello: String
    getProjects: [Project]
    getTasks: [Task]
    getProject(_id: ID!): Project
    getTask(_id: ID!): Task
  }

  type Mutation {
    createProject(name: String, description: String): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: ID!, name: String!, description: String): Project
    createTask(title: String, projectId: ID): Task
    deleteTask(_id: ID!): Task
    updateTask(_id: ID!, title: String!, projectId: ID!): Task
  }

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Task {
    _id: ID
    title: String
    projectId: ID
    createdAt: String
    updatedAt: String
  }
`