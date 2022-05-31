import React, { useContext } from "react";
import styled from "styled-components";
import { ReviewStateContext } from "./ReviewContext";
import ReviewItem from "./ReviewItem";

const ReviewListContainer = styled.div`
  .ReviewList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    padding-left: 23%;
  }
`;

const ReviewList = () => {
  const data = useContext(ReviewStateContext);
  return (
    <ReviewListContainer>
      <h3>Review List</h3>
      <div className="ReviewList">
        {data && data.map((it) => <ReviewItem key={it.id} {...it} />)}
      </div>
    </ReviewListContainer>
  );
};

export default ReviewList;
