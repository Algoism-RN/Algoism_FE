import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";
import { PageTitleWrapper } from "../../styles/category/Wrapper";

// 결과 페이지 최상위 태그
export const ResultContainer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: start;
`;

// 결과 멘트 태그
export const ResultMentView = styled(PageTitleWrapper)`
  justify-content: center;
`;

// 그래프 컨테이너
export const ChartsContainer = styled(ColumnWrapper)`
  width: 85%;
  height: 350px;

  align-items: center;
  justify-content: center;
`;
