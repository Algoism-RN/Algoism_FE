import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Home } from "../screens/Home/Home";
import { Main } from "../screens/Main/Main";
import { Result } from "../screens/Result/Result";
import { useTheme } from "../hooks/useTheme";
import { useFont } from "../hooks/useFont";
import { Loading } from "../components/Loading/Loading";

const Stack = createNativeStackNavigator();

// Stack Navigation
export const StackNavigation = () => {
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
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShown: false }}
        >
          {/* 메인 페이지 */}
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const Tab = createBottomTabNavigator();

// Bottom Tab
export const BottomTabNavigation = () => {
  // 테마 설정하는 커스텀 Hook 호출
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 75, // Tab 높이 설정
          backgroundColor: theme.tabBackground, // Tab 배경 색상 설정
          borderTopColor: theme.tabBorderColor, // Tab 상단 테두리 색상 설정
        },
        tabBarActiveTintColor: theme.tabFontColor, // 활성화된 Tab의 폰트 색상 설정
        tabBarInactiveTintColor: theme.backgroundFontColor, // 활성화되지 않은 Tab의 폰트 색상 설정
        // Tab의 Icon 색상 설정
        tabBarIcon: ({ focused }) => {
          let iconName; // MaterialIcons에서 불러올 Icon 이름
          let iconColor; // Tab 활성 여부에 따라 변경할 Icon의 색상

          if (route.name === "Quiz") {
            // 'EditNote'이라는 Icon 사용
            iconName = "edit-note";

            // Home Tab의 활성화 여부에 따라 Icon 색상 변경
            iconColor = focused
              ? theme.tabFontColor
              : theme.backgroundFontColor;
          } else if (route.name === "Result") {
            // 'Assessment'이라는 Icon 사용
            iconName = "assessment";

            // Result Tab의 활성화 여부에 따라 Icon 색상 변경
            iconColor = focused
              ? theme.tabFontColor
              : theme.backgroundFontColor;
          }

          return <Icon name={iconName} size={20} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen name="Quiz" component={Home} />
      <Tab.Screen name="Result" component={Result} />
    </Tab.Navigator>
  );
};
