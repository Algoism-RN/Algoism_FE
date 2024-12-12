import {
  TitleText,
  ResultMentText,
  ChartCategoryText,
  ChartScoreText,
  QuestionText,
  AnswerText,
} from "./styles";

// 페이지 타이틀
export const Title = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};

// 결과 멘트
export const ResultMent = ({ text }) => {
  return <ResultMentText>{text}</ResultMentText>;
};

// 차트 카테고리
export const ChartCategory = ({ text }) => {
  return <ChartCategoryText>{text}</ChartCategoryText>;
};

// 차트 점수
export const ChartScore = ({ text }) => {
  return <ChartScoreText>{text * 10}</ChartScoreText>;
};

// 질문
export const Question = ({ text }) => {
  return <QuestionText>{text}</QuestionText>;
};

// 문제 보기
export const Answer = ({ text }) => {
  return <AnswerText>{text}</AnswerText>;
};
