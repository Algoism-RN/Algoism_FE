import styled from "styled-components/native";
import { AoboshiOneText } from "../../styles/category/Text";

// 버튼 최상위 태그
export const ButtonContainer = styled.TouchableOpacity`
  width: 85%;
  align-items: center;

  padding: 10px 0px;

  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.borderColor};

  background-color: ${(props) => props.btnColor || "#A0A0A0"};
`;

// 버튼 내부 텍스트
export const ButtonText = styled(AoboshiOneText)`
  font-size: 25px;
  color: #ffffff;
`;
