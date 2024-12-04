import { Alert } from "react-native";

// 커스텀 Alert창
export const customAlert = ({ title, text }) => {
  Alert.alert(title, text, [
    { text: "확인", onPress: () => {}, style: "cancel" },
  ]);
};
