import React from "react";
import { ButtonContainer, ButtonText } from "./styled";

// 버튼
export const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
