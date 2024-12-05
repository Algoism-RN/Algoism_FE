import styled from "styled-components";

// Progress Bar 최상위 태그
export const ProgressContainer = styled.View`
  width: 85%;
  height: 15px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.pBar};
`;

// Progress Bar 내부 진행도
export const Fill = styled.View`
  width: ${(props) => props.width};
  height: 100%;

  border-radius: 10px;
  background-color: ${(props) => props.theme.pBarFill};
`;
