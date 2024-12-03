import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";
import { AoboshiOneText } from "../../styles/category/Text";

// Home 화면 최상위 태그
export const HomeContainer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: center;
`;
export const UpContainer = styled(ColumnWrapper)`
  flex: 0.7; 
  justify-content: center;
  align-items: center;
`;

export const DownContainer = styled(ColumnWrapper)`
  flex: 1; 
  justify-content: center;
  align-items: center;
`;
// Home 화면 Text
export const HomeText = styled(AoboshiOneText)`
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  line-height: 24px;
`;
