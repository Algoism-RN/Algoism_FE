import {
  TitleText,
  ResultMentText,
  ChartCategoryText,
  ChartScoreText,
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
  return <ChartScoreText>{text}</ChartScoreText>;
};
