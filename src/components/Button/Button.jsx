import React from "react";
import { ButtonContainer, StyledButton, ButtonText } from "./styled";

export const Button = ({ selectedValue, onPress }) => {
  const handlePress = () => {
    console.log("Selected Value:", selectedValue);
    onPress(selectedValue);
  };

  return (
    <ButtonContainer>
      <StyledButton onPress={handlePress}>
        <ButtonText>Start</ButtonText>
      </StyledButton>
    </ButtonContainer>
  );
};