import styled from "styled-components/native";
import { AoboshiOneText, AllertaStencilText } from "../../styles/category/Text";

// 회색 버튼 최상위 태그
export const ButtonContainer = styled.TouchableOpacity`
  width: 85%;
  align-items: center;

  padding: 10px 0px;

  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.borderColor};

  background-color: ${(props) => props.btnColor || "#A0A0A0"};
`;

// 회색 버튼 내부 텍스트
export const ButtonText = styled(AoboshiOneText)`
  font-size: 25px;
  color: #ffffff;
`;

// 도움말 버튼 최상위 태그
export const HintContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 5px;

  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};

  background-color: transparent;
`;

// 도움말 버튼 텍스트
export const HintText = styled(AllertaStencilText)`
  font-size: 15px;
`;
