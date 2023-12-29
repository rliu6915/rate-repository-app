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