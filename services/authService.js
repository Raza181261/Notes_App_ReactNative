import { account } from "./appwrite";
import { ID } from "react-native-appwrite";

const authService = {
  //register user
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "registration failed, Plase try again",
      };
    }
  },
  // login user
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || "Login failed, Plase check your credentials",
      };
    }
  },

  //get logedIn user
  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  //logOut
  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return {
        error: error.message || "Logout failed, Please try again later",
      };
    }
  },
};

export default authService;
