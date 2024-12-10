import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectContainer } from "./styles";

export const Select = ({ onChange }) => {
  // Select의 열림/닫힘 상태
  const [open, setOpen] = useState(false);

  // 선택한 카테고리 출력을 위한 상태
  const [value, setValue] = useState(null);

  // option (Select 내부 선택 가능한 값들)
  const [items, setItems] = useState([
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C", value: "c" },
    { label: "Computer Science", value: "cs" },
  ]);

  // 값이 변경될 경우 상태 업데이트, 상위 컴포넌트의 상태도 업데이트
  const handleValueChange = (selectedValue) => {
    // 화면에 출력되는 value 값 업데이트
    setValue(selectedValue);

    if (onChange) {
      onChange(selectedValue); // 상위 컴포넌트의 상태도 업데이트
    }
  };

  return (
    <SelectContainer>
      <DropDownPicker
        open={open} // true: 열림, false: 닫힘
        value={value} // 선택한 카테고리 출력을 위한 속성
        items={items} // option 정의
        setOpen={setOpen} // 열리거나 닫힐 경우 open 값 토글
        setValue={handleValueChange} // 값이 변할 때 업데이트 함수 호출
        setItems={setItems}
        placeholder="Category"
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
        dropDownContainerStyle={{
          borderColor: "#ccc",
          borderRadius: 10,
        }}
        textStyle={{
          fontSize: 16,
          color: "#333",
        }}
      />
    </SelectContainer>
  );
};
