import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";

// ScrollView
export const QuizScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: ${(props) => props.theme.background};
`;

// Quiz Screen 최상위 태그
export const QuizContainer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: start;
`;

// 문제 사진 들어갈 태그
export const QuestionBox = styled.View`
  width: 85%;
  height: 250px;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
`;

// 정답 보기들의 부모 태그
export const AnswerContainer = styled.View`
  width: 85%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 15px;
`;

// 정답 보기 태그
export const AnswerBox = styled.TouchableOpacity`
  width: 100%;
  height: fit-content;

  padding: 10px 15px;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;
