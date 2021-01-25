import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// GLOBAL STATE ...
import AuthContext from "../AppContext/AuthContext";
// SUB NAVIGATORS
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Drawer = createDrawerNavigator();

const RootStack = () => {
  // user object, retrieved from AuthContext ...
  const { user } = useContext(AuthContext);

  return (
    <Drawer.Navigator initialRouteName={user ? "App" : "Auth"}>
      <Drawer.Screen name="Auth" component={AuthStack} />
      <Drawer.Screen name="App" component={AppStack} />
    </Drawer.Navigator>
  );
};

export default RootStack;
