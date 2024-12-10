import { useState } from "react";
import { GetQuestionAPI } from "../../services/api/GetQuestionAPI";
import { customAlert } from "../../components/Alert/Alert";

export const useQuizEvent = ({ setIsStart, category, navigation }) => {
  // 퀴즈 종료
  const handleClickEnd = () => {
    setIsStart(false);
  };

  // 랜덤 질문 상태
  const [randomQ, setRandomQ] = useState(null);

  // 랜덤 질문 10개 로딩
  const handleGetQuestion = async () => {
    const result = await GetQuestionAPI({ category });
    setRandomQ(result);
  };

  // 푼 문제 개수
  const [solveNum, setSolveNum] = useState(0);

  // 보기 클릭 시
  const handleClickAnswer = () => {
    setSolveNum(solveNum + 1);
  };

  // 10문제 모두 풀이 시
  const handleComplete = () => {
    if (solveNum > 9) {
      // 문제 풀이 횟수 0으로 초기화
      setSolveNum(0);

      // 커스텀 Alert창 출력
      customAlert({
        title: "문제 풀이 완료",
        text: "결과 페이지로 이동합니다.",
      });

      // 결과 페이지로 이동
      navigation.navigate("Result");

      // 카테고리 선택 페이지로 이동
      handleClickEnd();
    }
  };

  return {
    randomQ,
    handleGetQuestion,
    solveNum,
    handleClickAnswer,
    handleComplete,
  };
};
