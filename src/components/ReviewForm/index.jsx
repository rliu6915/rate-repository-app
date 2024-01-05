import ReviewFormContainer from "./ReviewFormContainer"

const ReviewForm = () => {
  const onSubmit = () => {
    console.log("Submitting review")
  }

  return (
    <ReviewFormContainer onSubmit={onSubmit}/>
  )
}

export default ReviewForm