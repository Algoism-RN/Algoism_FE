import React, { useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../styles/theme";

export const useTheme = () => {
  // 시스템 테마 조회
  const systemTheme = useColorScheme();

  // 시스템 테마에 따라 각각의 테마를 theme 변수에 저장
  const [theme, setTheme] = useState(
    systemTheme === "dark" ? darkTheme : lightTheme
  );

  // 시스템 테마 변경 시 theme 변수 즉시 변경
  useEffect(() => {
    setTheme(systemTheme === "dark" ? darkTheme : lightTheme);
  }, [systemTheme]);

  return { theme };
};
