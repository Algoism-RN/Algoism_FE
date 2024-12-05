export const useQuizEvent = ({ setIsStart }) => {
  // 퀴즈 종료
  const handleClickEnd = () => {
    setIsStart(false);
  };

  return { handleClickEnd };
};
