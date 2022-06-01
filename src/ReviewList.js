import React, { useContext } from "react";
import styled from "styled-components";
import { ReviewStateContext } from "./ReviewContext";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
  const data = useContext(ReviewStateContext);

  return (
    <ReviewListContainer>
      <h3>{data.length} Reviews</h3>
      <div className="ReviewList">
        {data.map((it) => (
          <ReviewItem key={it.id} {...it} />
        ))}
      </div>
    </ReviewListContainer>
  );
};

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

export default ReviewList;
