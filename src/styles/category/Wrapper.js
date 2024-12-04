import styled from "styled-components";

// 가로 정렬 Full View
export const RowWrapper = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  background-color: ${(props) => props.theme.background};
`;

// 세로 정렬 Full View
export const ColumnWrapper = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.background};
`;

// 페이지 타이틀 View
export const PageTitleWrapper = styled.View`
  width: 85%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.background};
`;

// 여백을 위한 View
export const Gap = styled.View`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};

  background-color: ${(props) => props.theme.background};
`;
