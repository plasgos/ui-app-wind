import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useClearAsyncStorage = () => {
  useEffect(() => {
    const clearAllData = async () => {
      try {
        const allKeys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(allKeys);

        console.log("All data deleted successfully!");
      } catch (error) {
        console.log("Error deleting data:", error);
      }
    };

    clearAllData();
  }, []);
};

export default useClearAsyncStorage;
