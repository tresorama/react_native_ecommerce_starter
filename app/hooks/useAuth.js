import React, { useState } from "react";

// CONSTANT ...
import CONSTANT from "../constant/constant";
// STORAGE ...
import AUTH_STORAGE from "../auth/authStorage";
// API LAYER USED TO COMMUNICATE WITH SERVER ...
import API_RUNNER from "../API/API_RUNNER";

//Business Logic
const buildRequestBody = {
  login: ({ email, password }) => {
    // build a FormData JS Object ...
    let formData = new FormData();
    formData.append("type", "login");
    formData.append("email", email);
    formData.append("password", password);
    return formData;
  },
  logout: (userData) => {
    return { ...userData };
  },
};
const parseData = {
  login: (res) => {
    let result = {};
    try {
      // COMUNICATION ERROR ???
      if (!res.ok) {
        throw Error("API COMUNICATION ERROR");
      }
      // LOGIN SUCCESS ???
      if (!res.data.success) {
        throw Error("LOGIN FAILED");
      } else {
        debugger;
        result = {
          error: false,
          userData: {
            authToken: res.data.auth_token,
            id: res.data.user_id,
            name: res.data.user_login,
          },
        };
      }
    } catch (err) {
      debugger;
      console.log(err);
      result = { error: true, userData: null };
    }

    return result;
  },
  logout: (res) => {
    let result = null;
    try {
      // COMUNICATION ERROR ???
      if (!res.ok) {
        throw Error("API COMUNICATION ERROR");
      }
      // LOGOUT SUCCESS ???
      if (!res.data.success) {
        throw Error("LOGOUT FAILED");
      }
      result = true;
    } catch (err) {
      debugger;
      result = false;
    }
    return result;
  },
};
const AUTH_FETCH = {
  login: async (fields) => {
    debugger;
    // // say we are validating ...
    // setState({ ...state, isValidating: true });

    // build request body with login data ...
    debugger;
    const body = buildRequestBody.login(fields);

    // try to login via API
    debugger;
    const response = await API_RUNNER.loginUser(body);

    // parse data...
    debugger;
    const { userData } = parseData.login(response);

    // update state...
    return { userData };
  },
  logout: async (user) => {
    // build request body with login data ...
    debugger;
    const body = buildRequestBody.logout(user);

    // try to logout via API
    debugger;
    const response = await API_RUNNER.logoutUser(body);

    // parse data...
    debugger;
    const loggedOut = parseData.logout(response);

    // update state...
    return true;
  },
};

// Implementation Logic
const useAuth = () => {
  const getDefaultUser = () => null;
  const [user, setUser] = useState(getDefaultUser());
  const [isValidating, setIsValidating] = useState(false);

  // ASYNC ACTION ->  maybe try to get "user" from some dedicated storage
  const recoverUserFromPreviousTime = async () => {
    const userData = await AUTH_STORAGE.retrieveUser();
    if (userData) {
      setUser(userData);
    }
    return true;
  };

  // ASYNC ACTION ->  call Server via REST API ...
  //                  ...store "user" in "AUTH_STORAGE" (is an "asyncStorage" Layer) ..
  //                  ...update "user" (local state var) via "setUser()" ..
  const login = async (fields) => {
    // say that we are validating ...
    setIsValidating(true);

    // try to login via API to backend
    const { userData } = await AUTH_FETCH.login(fields);

    // say that we are not validating anymore ...
    setIsValidating(false);

    // check result
    if (!userData) {
      // login failed ...
      // so say that is failed to this component to notify user ...
      return null;
    }

    // login succeded ...

    // save to sotrage
    if (CONSTANT.asyncStorageUser) {
      AUTH_STORAGE.storeUser(userData);
    }

    // update user object in AuthContext
    setUser(userData);

    // return result
    return true;
  };

  // ASYNC ACTION ->  call Server via REST API..
  //                  ...delete "user" from "AUTH_STORAGE" (is an "asyncStorage" Layer) ..
  //                  ...update "user" (local state var) via "setUser()" with "getDefaultUser()" ..
  const logout = async () => {
    // say that we are validating ...
    setIsValidating(true);

    // try log out via API ...
    const loggedOut = await AUTH_FETCH.logout(user);

    // say that we are not validating anymore ...
    setIsValidating(false);

    if (loggedOut) {
      // delete user from storage ...
      if (CONSTANT.asyncStorageUser) {
        AUTH_STORAGE.deleteUser();
      }
      // initialize "user" in AuthContext ...
      setUser(getDefaultUser());
    }
  };

  return { user, recoverUserFromPreviousTime, login, logout, isValidating };
};

export default useAuth;
