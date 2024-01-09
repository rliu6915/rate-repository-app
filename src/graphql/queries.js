import { gql } from "@apollo/client"

import { REPOSITORIES_DETAILS, REVIEW_DETAILS } from "./fragments"

export const GET_REPOSITORIES = gql`
  ${REPOSITORIES_DETAILS}
  query($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String)  {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
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
  ${REPOSITORIES_DETAILS}
  ${REVIEW_DETAILS}
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
`