import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query getProjects {
    getProjects {
      _id
      name
      description
    }
  }
`

export const CREATE_PROJECT = gql`
  mutation($name: String, $description: String){
    createProject (name: $name, description: $description) {
      _id
      name
      description
      createdAt
      updatedAt
    }
  }
`

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    getProject(_id: $id) {
      _id
      name
      description
      createdAt
      tasks {
        _id
        title
        createdAt
      }
    }
  }
`