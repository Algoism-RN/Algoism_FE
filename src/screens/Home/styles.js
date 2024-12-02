import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";
import { CustomText } from "../../styles/category/Text";

// Home 화면 최상위 태그
export const HomeContainer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: center;
`;

// Home 화면 Text
export const HomeText = styled(CustomText)`
  font-size: 15px;
`;
