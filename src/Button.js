import styled, { css } from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";

const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
`;

const Button = ({ plus, minus }) => {
  return (
    <ButtonStyle>
      <HiPlus />
    </ButtonStyle>
  );
};

export default Button;
