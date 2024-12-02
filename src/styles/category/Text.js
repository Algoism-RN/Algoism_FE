import styled from "styled-components";

// 기본 설정 Text
export const CustomText = styled.Text`
  width: fit-content;
  height: fit-content;

  color: ${(props) => props.theme.fontColor};
`;
