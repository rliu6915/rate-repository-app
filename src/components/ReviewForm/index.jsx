import { useNavigate } from "react-router-native";
import { CREATE_REVIEW } from "../../graphql/mutations";
import ReviewFormContainer from "./ReviewFormContainer"
import { useMutation } from '@apollo/client';

const ReviewForm = () => {
  const [createReview] = useMutation(CREATE_REVIEW)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    console.log("Submitting review", values)
    const {repoOwnerName, repoName, reviewRating, reviewText} = values

    try {
      const { data } = await createReview({
        variables: {
          review: {
            repositoryName: repoName,
            ownerName: repoOwnerName,
            rating: Number(reviewRating),
            text: reviewText
          }
        }
      })
      console.log("Review created", data)
      navigate(`/repository/${data.createReview.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ReviewFormContainer onSubmit={onSubmit}/>
  )
}

export default ReviewForm