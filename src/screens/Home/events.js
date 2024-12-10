import { useState } from "react";
import { customAlert } from "../../components/Alert/Alert";

export const useHomeEvent = () => {
  // 선택한 카테고리 저장하는 상태
  const [category, setCategory] = useState(null);

  // 선택한 카테고리 저장하는 핸들러
  const handleSetCategory = (value) => {
    setCategory(value);
  };

  // Home Screen <-> Quiz Screen 토글을 위한 상태
  const [isStart, setIsStart] = useState(false);

  // category 값에 따라 Quiz 컴포넌트로 넘길 value
  const [categoryValue, setCategoryValue] = useState("");

  // Start 버튼 클릭 시
  const handleClickStart = () => {
    // 카테고리 미선택 시 커스텀 Alert창 출력
    if (category === null) {
      customAlert({ title: "Algoism?", text: "카테고리를 선택해주세요." });
    }
    // 카테고리 선택 시 퀴즈 풀이 화면 출력
    else {
      switch (category) {
        case "c":
          setCategoryValue("C");
          break;
        case "java":
          setCategoryValue("Java");
          break;
        case "python":
          setCategoryValue("Python");
          break;
        case "cs":
          setCategoryValue("Computer Science");
          break;
      }
      setIsStart(true);
    }
  };

  return {
    setCategory,
    categoryValue,
    handleSetCategory,
    isStart,
    setIsStart,
    handleClickStart,
  };
};
