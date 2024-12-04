import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../styles/category/Wrapper";

// 차트 최상위 태그
export const ChartContainer = styled(ColumnWrapper)`
  width: 90%;
  height: 90%;

  align-items: center;
  justify-content: flex-end;
`;

// 상단 막대 그래프 View
export const ChartBarView = styled(RowWrapper)`
  flex: 1;

  align-items: flex-end;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.borderColor};
`;

// 하단 카테고리 View
export const ChartCategoryView = styled(RowWrapper)`
  height: 40px;

  align-items: center;
  justify-content: space-between;
`;

// 막대 그래프를 구성하는 Bar
export const Bar = styled.View`
  width: 30px;
  height: ${(props) => props.height};

  padding: 10px 10px;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-bottom-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background-color: #ffffff;
`;

// Bar를 감싸는 컨테이너
export const BarContainer = styled(ColumnWrapper)`
  width: 50px;
  height: fit-content;

  align-items: center;
  justify-content: flex-end;
`;
