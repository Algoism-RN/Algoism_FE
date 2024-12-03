import React, { useState } from "react";
import { HomeContainer, UpContainer, DownContainer } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { Explain } from "../../components/Explain/Explain";

export const Home = () => {
  // 선택한 카테고리 저장하는 상태
  const [selectedValue, setSelectedValue] = useState(null);

  // 선택한 카테고리 저장하는 핸들러
  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <HomeContainer>
      <SafeAreaView />
      <UpContainer>
        <Logo fontSize="50px">Algoism?</Logo>
        <Explain />
      </UpContainer>
      <DownContainer>
        <Select onValueChange={handleValueChange} />
        <Button text={"Start"} />
      </DownContainer>
    </HomeContainer>
  );
};
