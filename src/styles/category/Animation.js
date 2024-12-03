import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// Slide 효과
export const SlideAnimation = (direction, boxWidth) => {
  // direction 값에 따라 초기 좌표 설정
  const translateX = useSharedValue(0);

  // 애니메이션 스타일 정의
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      flexDirection: "row",
    };
  });

  // 애니메이션 실행
  useEffect(() => {
    if (boxWidth > 0) {
      // boxWidth가 유효할 때만 애니메이션 시작
      translateX.value = direction
        ? -boxWidth - 10 // 왼쪽에서 오른쪽으로
        : boxWidth + 10; // 오른쪽에서 왼쪽으로

      translateX.value = withRepeat(
        withTiming(0, {
          duration: 20000,
          easing: Easing.linear,
        }),
        -1, // 무한 반복
        false // 동일 방향 반복
      );
    }
  }, [translateX, boxWidth, direction]);

  return animatedStyle;
};

// 텍스트 Blinking 효과
export const BlinkingAnimation = () => {
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0, { duration: 800, easing: Easing.linear }),
      -1,
      true
    );
  }, [opacity]);

  return animatedStyle;
};
