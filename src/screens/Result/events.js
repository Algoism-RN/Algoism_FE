export const useResultEvent = ({ navigation }) => {
  // Again 클릭 시 퀴즈 풀이 회면으로 이동
  const handleClickAgain = () => {
    navigation.navigate("Quiz");
  };

  return { handleClickAgain };
};
