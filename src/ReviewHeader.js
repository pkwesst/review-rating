import React from "react";
import styled from "styled-components";

const ReviewHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  position: fixed;
  background-color: hsl(223, 19%, 93%);
  z-index: 10;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);

  span {
    color: orange;
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
