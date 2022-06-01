import { useContext, useState } from "react";
import { ReviewDispatchContext } from "./ReviewContext";
import styled from "styled-components";
import ReviewRating from "./ReviewRating";

const ReviewCreate = () => {
  const { onCreate } = useContext(ReviewDispatchContext);

  const [review, setReview] = useState({
    author: "",
    content: "",
    rating: "",
  });

  return (
    <ReviewCreateStyle>
      <div className="ReviewCreate-container">
        <h2>What's Review rating ?</h2>
        <div className="input-wrap">
          <ReviewRating />
          <input
            name="content"
            placeholder="Write a review"
            type="text"
            value={review.content}
            onChange={() => {}}
          />
        </div>
      </div>
    </ReviewCreateStyle>
  );
};

const ReviewCreateStyle = styled.div`
  display: flex;
  justify-content: center;

  .ReviewCreate-container {
    width: 50vw;
    display: flex;
    min-height: 15em;
    // margin-bottom: 20px;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    word-break: break-word;
    background-color: #fff;
    border-radius: 5px;
    letter-spacing: 0.02em;
    word-spacing: 0.1em;
  }

  .input-wrap {
    width: 100%;
  }

  input {
    width: 100%;
    height: 50%;
  }
`;

export default ReviewCreate;
