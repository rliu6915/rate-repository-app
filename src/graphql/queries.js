import { gql } from "@apollo/client"

import { REPOSITORIES_DETAILS } from "./fragments"

export const GET_REPOSITORIES = gql`
  ${REPOSITORIES_DETAILS}
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
`
export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url  
    }
  }
`