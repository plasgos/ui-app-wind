import * as SecureStore from "expo-secure-store";

const secureStorage = {
  getItem: async (key) => {
    try {
      return await SecureStore.getItemAsync("register");
    } catch (error) {
      console.error("Error retrieving state from SecureStore:", error);
    }
  },
  setItem: async (key, value) => {
    console.log("🚀 ~ setItem: ~ key:", key);
    try {
      await SecureStore.setItemAsync("register", value);
      console.log("🚀 ~ setItem: ~ value:", value);
    } catch (error) {
      console.error("Error saving state to SecureStore:", error);
    }
  },
  removeItem: async (key) => {
    try {
      await SecureStore.deleteItemAsync("register");
    } catch (error) {
      console.error("Error removing state from SecureStore:", error);
    }
  },
};

export default secureStorage;
