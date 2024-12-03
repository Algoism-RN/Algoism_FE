import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectContainer } from "./styles";

export const Select = ({ onValueChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C", value: "c" },
    { label: "CS", value: "cs" },
  ]);

  const handleValueChange = (selectedValue) => {
    setValue(selectedValue);
    if (onValueChange) {
      onValueChange(selectedValue); 
    }
  };

  return (
    <SelectContainer>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange} // 선택된 값을 업데이트
        setItems={setItems}
        placeholder="Select"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          backgroundColor: "#fff",
        }}
        dropDownContainerStyle={{
          borderColor: "#ccc",
          borderRadius: 8,
        }}
        textStyle={{
          fontSize: 16,
          color: "#333",
        }}
      />
    </SelectContainer>
  );
};