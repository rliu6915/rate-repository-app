import { gql } from "@apollo/client"

import { REPOSITORIES_DETAILS, REVIEW_DETAILS } from "./fragments"

export const GET_REPOSITORIES = gql`
  ${REPOSITORIES_DETAILS}
  query($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String)  {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`
export const GET_CURRENT_USER = gql`
  ${REVIEW_DETAILS}
  query getCurrentUser($includeReviews: Boolean = false){
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  ${REPOSITORIES_DETAILS}
  ${REVIEW_DETAILS}
  query getRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            ...ReviewDetails
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`