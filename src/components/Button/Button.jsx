import React from "react";
import { ButtonContainer, HintContainer, ButtonText, HintText } from "./styled";

// 회색 버튼
export const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

// 도움말 버튼
export const Hint = () => {
  return (
    <HintContainer>
      <HintText>?</HintText>
    </HintContainer>
  );
};
