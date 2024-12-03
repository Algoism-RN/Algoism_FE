import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";

import { Loading } from "./components/Loading/Loading";
import { Main } from "./screens/Main/Main";
import { useTheme } from "./hooks/useTheme";
import { useFont } from "./hooks/useFont";

// Stack Navigator 객체 생성
const Stack = createNativeStackNavigator();

export default function App() {
  // 테마 설정하는 커스텀 Hook 호출
  const { theme } = useTheme();

  // 폰트 로딩 여부
  const { fontsLoaded } = useFont();

  // 폰트 로딩 전 -> 로딩 화면 출력
  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* 초기 페이지를 메인 페이지로 설정 */}
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
