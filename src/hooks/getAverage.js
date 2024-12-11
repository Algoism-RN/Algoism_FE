// 평균 계산 함수
export const getAverage = ({ array }) => {
  if (array.length === 0) {
    return 0;
  }

  // reduce 함수를 통해, array 배열의 모든 요소를 순회하면서 전부 덧셈 (초기값 0)
  const total = array.reduce((sum, value) => sum + value, 0);
  const average = (total / array.length).toFixed(1);
  return parseFloat(average);
};
