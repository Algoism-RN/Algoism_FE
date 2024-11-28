import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";

import { Main } from "./screens/Main/Main";
import { lightTheme, darkTheme } from "./styles/theme";

// Stack Navigatior 객체 생성
const Stack = createNativeStackNavigator();

export default function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* 초기 페이지를 랜딩 페이지로 설정 */}
        <Stack.Navigator initialRouteName="Main">
          {/* 메인 페이지 */}
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }} // 헤더 숨기기
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
