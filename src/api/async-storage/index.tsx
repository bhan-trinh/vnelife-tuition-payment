import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`Store Data Failed: ${error}`);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const addService = async (value: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem('searchedService');
    if (jsonValue != null) {
      var existingData = JSON.parse(jsonValue);
      if (existingData.includes(value)) {
        const index = existingData.indexOf(value);
        existingData.splice(index, 1);
      }
      const newData = JSON.stringify([...existingData.slice(-3), value]);
      await AsyncStorage.setItem('searchedService', newData);
    } else {
      const newData = JSON.stringify([value]);
      await AsyncStorage.setItem('searchedService', newData);
    }
  } catch (err) {}
};
