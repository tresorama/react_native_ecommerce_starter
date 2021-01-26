import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

// STORAGE RUNNER

const sanitizeValue = (value) => JSON.stringify(value);
const desanitizeValue = (value) => JSON.parse(value);
const STORAGE = {
  clear: async () => {
    try {
      AsyncStorage.clear();
      return true;
    } catch (error) {
      const test = error;
      console.log("STORAGE.clear() -> ERROR :" + error);
    }
  },
  remove: async (key) => {
    try {
      const removed = await AsyncStorage.removeItem(key); // return null if ok
      return removed;
    } catch (error) {
      const test = error;
      console.log("STORAGE.remove() -> ERROR :" + error);
    }
  },
  save: async (key, value) => {
    try {
      const sanitized = sanitizeValue(value);
      const result = await AsyncStorage.setItem(key, sanitized); // return null if ok
      return result;
    } catch (error) {
      const test = error;
      console.log("STORAGE.save() -> ERROR :" + error);
    }
  },
  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key); // return value if ok
      const desanitized = desanitizeValue(value);
      return desanitized;
    } catch (error) {
      const test = error;
      console.log("STORAGE.get() -> ERROR :" + error);
    }
  },
};
export default STORAGE;
