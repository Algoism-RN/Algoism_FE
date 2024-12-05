import styled from "styled-components";
import {
  AllertaStencilText,
  AoboshiOneText,
  PretendardText,
} from "../../styles/category/Text";

// 페이지 타이틀 텍스트
export const TitleText = styled(AoboshiOneText)`
  font-size: 35px;
`;

// 결과 멘트 텍스트
export const ResultMentText = styled(AoboshiOneText)`
  font-size: 30px;
`;

// 차트 카테고리 텍스트
export const ChartCategoryText = styled(PretendardText)`
  width: 20%;
  font-size: 13px;

  text-align: center;
`;

// 차트 점수 텍스트
export const ChartScoreText = styled(AoboshiOneText)`
  width: 50px;
  font-size: 13px;

  text-align: center;
`;

// 문제 보기 텍스트
export const AnswerText = styled(AoboshiOneText)`
  width: fit-content;
  height: fit-content;

  font-size: 15px;
`;
