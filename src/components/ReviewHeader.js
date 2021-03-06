import React from "react";
import styled from "styled-components";

const ReviewHeader = () => {
  return (
    <ReviewHeaderStyle>
      <h2>
        <span>★⭑</span> Review Rating
      </h2>
    </ReviewHeaderStyle>
  );
};

const ReviewHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  word-spacing: 5px;
  position: fixed;
  background-color: hsl(223, 19%, 93%);
  z-index: 10;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);

  span {
    color: orange;
  }

  &:hover span {
    color: black;
  }
`;

export default ReviewHeader;
