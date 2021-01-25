import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS ...
import ScreenLogin from "../screens/ScreenLogin";
import ScreenRegister from "../screens/ScreenRegister";
import ScreenWelcome from "../screens/ScreenWelcome";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={ScreenWelcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Register" component={ScreenRegister} />
    </Stack.Navigator>
  );
};

export default AuthStack;
