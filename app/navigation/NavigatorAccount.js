import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS ...
import ScreenAccountSummary from "../screens/ScreenAccountSummary";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountSummary" component={ScreenAccountSummary} />
    </Stack.Navigator>
  );
};
