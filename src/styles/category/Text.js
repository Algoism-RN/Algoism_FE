import styled from "styled-components";

// 기본 설정 Text
export const CustomText = styled.Text`
  width: fit-content;
  height: fit-content;

  color: ${(props) => props.theme.fontColor};
`;

// AllertaStencil Font
export const AllertaStencilText = styled(CustomText)`
  font-family: "AllertaStencil";
`;

// AoboshiOne Font
export const AoboshiOneText = styled(CustomText)`
  font-family: "AoboshiOne";
`;

// Pretendard Font
export const PretendardText = styled(CustomText)`
  font-family: "Pretendard";
`;
