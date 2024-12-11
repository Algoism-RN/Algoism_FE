import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../styles/category/Wrapper";

// 차트 최상위 태그
export const ChartContainer = styled(ColumnWrapper)`
  width: 100%;
  height: 90%;

  align-items: center;
  justify-content: flex-end;
`;

// 상단 막대 그래프 View
export const ChartBarView = styled(RowWrapper)`
  flex: 1;

  align-items: flex-end;
  justify-content: space-between;
`;

// 하단 카테고리 View
export const ChartCategoryView = styled(RowWrapper)`
  height: 40px;

  align-items: center;
  justify-content: space-between;

  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.borderColor};
`;

// 막대 그래프를 구성하는 Bar
export const Bar = styled.View`
  width: 30px;
  height: ${(props) => `${props.height * 25}px`};

  padding: 5px 10px;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-bottom-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background-color: #ffffff;
`;

// Bar를 감싸는 컨테이너
export const BarContainer = styled(ColumnWrapper)`
  width: 20%;
  height: fit-content;

  align-items: center;
  justify-content: flex-end;
`;
