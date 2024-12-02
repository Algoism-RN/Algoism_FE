import { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// Slide 효과
export const SlideAnimation = (direction) => {
  // direction 값에 따라 초기 좌표 설정
  const translateX = useSharedValue(direction ? -550 : 550);

  // 애니메이션 스타일 정의
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      flexDirection: "row",
    };
  });

  // 애니메이션 실행
  useEffect(() => {
    translateX.value = withRepeat(
      // 20초에 1cycle, cycle 마지막에 가속/감속 효과 제거
      withTiming(0, { duration: 20000, easing: Easing.linear }),
      -1, // 무한 반복
      false // 동일 방향으로 반복
    );
  }, [translateX]);

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
