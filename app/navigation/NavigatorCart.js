import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS ...
import ScreenCartSummary from "../screens/ScreenCartSummary";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartSummary" component={ScreenCartSummary} />
    </Stack.Navigator>
  );
};
