import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetCategoryData = async ({ key }) => {
  try {
    const storeData = await AsyncStorage.getItem(key);
    // console.log("storeData : ", storeData);
    return storeData ? JSON.parse(storeData) : [];
  } catch (error) {
    // console.log("GetCategoryData Error : ", error);
    return [];
  }
};
