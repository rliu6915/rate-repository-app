import ReviewFormContainer from "./ReviewFormContainer"

const ReviewForm = () => {
  const onSubmit = (values) => {
    console.log("Submitting review", values)
    const {repoOwnerName, repoName, reviewRating, reviewText} = values

  }

  return (
    <ReviewFormContainer onSubmit={onSubmit}/>
  )
}

export default ReviewForm