import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";

// Home 화면 최상위 태그
export const HomeContainer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: center;
`;

// Home 화면 내부 상단 부분
export const UpContainer = styled(ColumnWrapper)`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`;

// Home 화면 내부 하단 부분
export const DownContainer = styled(ColumnWrapper)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
