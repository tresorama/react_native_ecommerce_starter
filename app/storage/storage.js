import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

// STORAGE RUNNER

const sanitizeValue = (value) => JSON.stringify(value);
const desanitizeValue = (value) => JSON.parse(value);
const STORAGE = {
  clear: async () => {
    try {
      debugger;
      AsyncStorage.clear();

      debugger;
      return true;
    } catch (error) {
      debugger;
      const test = error;
      console.log("STORAGE.clear() -> ERROR :" + error);
    }
  },
  remove: async (key) => {
    try {
      debugger;
      const removed = await AsyncStorage.removeItem(key); // return null if ok

      debugger;
      return removed;
    } catch (error) {
      debugger;
      const test = error;
      console.log("STORAGE.remove() -> ERROR :" + error);
    }
  },
  save: async (key, value) => {
    try {
      debugger;
      const sanitized = sanitizeValue(value);

      debugger;
      const result = await AsyncStorage.setItem(key, sanitized); // return null if ok

      debugger;
      return result;
    } catch (error) {
      debugger;
      const test = error;
      console.log("STORAGE.save() -> ERROR :" + error);
    }
  },
  get: async (key) => {
    try {
      debugger;
      const value = await AsyncStorage.getItem(key); // return value if ok

      debugger;
      const desanitized = desanitizeValue(value);

      debugger;
      return desanitized;
    } catch (error) {
      debugger;
      const test = error;
      console.log("STORAGE.get() -> ERROR :" + error);
    }
  },
};
export default STORAGE;
