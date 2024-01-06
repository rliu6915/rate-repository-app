import { CREATE_REVIEW } from "../../graphql/mutations";
import ReviewFormContainer from "./ReviewFormContainer"
import { useMutation } from '@apollo/client';

const ReviewForm = () => {
  const [createReview] = useMutation(CREATE_REVIEW)

  const onSubmit = (values) => {
    console.log("Submitting review", values)
    const {repoOwnerName, repoName, reviewRating, reviewText} = values
    createReview({
      variables: {
        repoOwnerName,
        repoName,
        reviewRating: parseInt(reviewRating),
        reviewText
      }
    })
  }

  return (
    <ReviewFormContainer onSubmit={onSubmit}/>
  )
}

export default ReviewForm