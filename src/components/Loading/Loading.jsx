import { ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size={"large"} color={"#818181"} />
    </LoadingContainer>
  );
};
