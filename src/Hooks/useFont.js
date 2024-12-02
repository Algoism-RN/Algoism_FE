import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";

export const useFont = () => {
  // 폰트 로딩 여부
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // 폰트 비동기 로딩
        await Font.loadAsync({
          AllertaStencil: require("../assets/fonts/AllertaStencil-Regular.ttf"),
          AoboshiOne: require("../assets/fonts/AoboshiOne-Regular.ttf"),
          Pretendard: require("../assets/fonts/Pretendard-Regular.otf"),
        });

        // 로딩한 폰트 전역에서 사용 가능하도록 설정
        setCustomText({
          style: {
            fontFamily: "Pretendard",
          },
        });

        // 폰트 로딩 여부 true로 변환
        setFontsLoaded(true);
      } catch (error) {
        // error 로그 출력
        // console.error("Font Loading Error : ", error);
      }
    })();
  }, []);

  return { fontsLoaded };
};
