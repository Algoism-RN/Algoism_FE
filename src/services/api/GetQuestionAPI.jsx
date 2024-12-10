import axios from "axios";
import { home, school } from "../../../IP";

export const GetQuestionAPI = async ({ category }) => {
  // API 요청 URL 뒤에 붙일 파라미터
  let parameter;

  // category 값에 따라 categoryCode 값 변경
  switch (category) {
    case "C":
      parameter = "c";
      break;
    case "Java":
      parameter = "java";
      break;
    case "Python":
      parameter = "python";
      break;
    case "Computer Science":
      parameter = "cs";
      break;
  }

  try {
    const response = await axios.get(
      `http://${home}:8080/question/${parameter}`
    );
    // console.log("Response : ", response.data);
    return response.data;
  } catch (error) {
    // console.log("Error : ", error);
    return error;
  }
};
