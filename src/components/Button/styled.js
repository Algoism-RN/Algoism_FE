import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  margin-top: 20px;
  width: 90%;
  align-items: center;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.btnColor || "#A0A0A0"};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;