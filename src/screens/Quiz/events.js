import { useState } from "react";
import { GetQuestionAPI } from "../../services/api/GetQuestionAPI";
import { customAlert } from "../../components/Alert/Alert";
import { GetCategoryData } from "../../services/storage/GetCategoryData";
import { SetCategoryData } from "../../services/storage/SetCategoryData";

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

  // 맞춘 문제 개수
  const [correctNum, setCorrectNum] = useState(0);

  // 보기 클릭 시
  const handleClickAnswer = ({ num, answer }) => {
    setSolveNum(solveNum + 1);

    if (num === Number(answer)) {
      setCorrectNum(correctNum + 1);
    }
  };

  // 10문제 모두 풀이 시
  const handleComplete = async () => {
    if (solveNum > 9) {
      // AsyncStorage 데이터 조회
      const prevData = await GetCategoryData({ key: category });

      // 방금 푼 문제들의 점수 누적
      const updateData = [...prevData, correctNum];

      // AsyncStorage 데이터 저장
      await SetCategoryData({ key: category, value: updateData });

      // 문제 풀이 횟수 0으로 초기화
      setSolveNum(0);

      // 커스텀 Alert창 출력
      customAlert({
        title: `${category}`,
        text: `${correctNum * 10}점`,
      });

      // 결과 페이지로 이동
      navigation.navigate("Result");

      // 카테고리 선택 페이지로 이동
      handleClickEnd();
    }
  };

  // Modal show & hide 제어
  const [visible, setVisible] = useState(false);

  return {
    randomQ,
    handleGetQuestion,
    solveNum,
    handleClickAnswer,
    handleComplete,
    visible,
    setVisible,
  };
};
