import React from "react";
import styled from "styled-components";

const ReviewHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: hsl(228, 33%, 97%);
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  &:hover {
    span {
      color: orange;
    }
  }
`;

const ReviewHeader = () => {
  return (
    <ReviewHeaderStyle>
      <h2>
        <span>★⭑</span> Review Rating
      </h2>
    </ReviewHeaderStyle>
  );
};

export default ReviewHeader;
