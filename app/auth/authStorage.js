import STORAGE from "../storage/storage";

const AUTH_STORAGE = {
  storeUser: async (userData) => await STORAGE.save("user", userData),
  retrieveUser: async () => await STORAGE.get("user"),
  deleteUser: async () => await STORAGE.remove("user"),
};

export default AUTH_STORAGE;
