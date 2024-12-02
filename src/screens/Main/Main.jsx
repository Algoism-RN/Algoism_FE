import { useState } from "react";

import { Landing } from "../Landing/Landing";
import { Home } from "../Home/Home";

export const Main = () => {
  // 앱 첫 실행 여부
  const [isStart, setIsStart] = useState(false);

  // isStart: false -> 앱 첫 실행이니깐 Landing 화면 출력
  // isStart: true -> 앱이 이미 실행 중인 상태이므로 Home 화면 출력
  return isStart ? <Home /> : <Landing setIsStart={setIsStart} />;
};
