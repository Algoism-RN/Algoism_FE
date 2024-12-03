import { ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";

// 로딩 컴포넌트
export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size={"large"} color={"#818181"} />
    </LoadingContainer>
  );
};
