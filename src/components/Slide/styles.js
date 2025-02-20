import styled from "styled-components";
import { AllertaStencilText } from "../../styles/category/Text";

// 무한 슬라이드
export const SlideContainer = styled.View`
  width: fit-content;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.direction ? "flex-start" : "flex-end")};

  overflow: scroll;
`;

// 카테고리 Text
export const CategoryText = styled(AllertaStencilText)`
  font-size: 40px;
  color: #a9a9a9;
`;

// 왼쪽에서 오른쪽으로 움직이는 Slide
export const CategoryBox = styled.View`
  width: fit-content;
  height: fit-content;

  margin-right: 10px;
`;
