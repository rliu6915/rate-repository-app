import { gql } from '@apollo/client'
import { REVIEW_DETAILS } from './fragments'

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  ${REVIEW_DETAILS}
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      ...ReviewDetails
    }
  }
`