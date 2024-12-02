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
