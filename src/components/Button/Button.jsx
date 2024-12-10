import React from "react";
import { ButtonContainer, HintContainer, ButtonText, HintText } from "./styles";

// 회색 버튼
export const Button = ({ text, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

// 도움말 버튼
export const Hint = ({ onPress }) => {
  return (
    <HintContainer onPress={onPress}>
      <HintText>?</HintText>
    </HintContainer>
  );
};
