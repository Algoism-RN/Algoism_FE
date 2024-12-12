import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";

export const HintModalWrapper = styled(ColumnWrapper)`
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const HintModalContainer = styled.View`
  width: 80%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  padding: 15px 20px;

  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};

  background-color: ${(props) => props.theme.background};
`;

export const HintArea = styled.View`
  width: 100%;
  height: fit-content;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 10px 0px;

  background-color: transparent;
`;
