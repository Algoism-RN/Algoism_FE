import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetCategoryData = async ({ key, value }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    // console.log(`${key} : ${JSON.stringify(value)} 저장 완료`);
  } catch (error) {
    // console.log("SetCategoryData Error : ", error);
  }
};
