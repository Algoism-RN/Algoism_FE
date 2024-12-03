import { useState } from "react";

export const useHomeEvent = () => {
  // 선택한 카테고리 저장하는 상태
  const [selectedValue, setSelectedValue] = useState(null);

  // 선택한 카테고리 저장하는 핸들러
  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return { selectedValue, handleValueChange };
};
