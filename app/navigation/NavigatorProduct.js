import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS ...
import ScreenProductLoop from "../screens/ScreenProductLoop";
import ScreenProductDetails from "../screens/ScreenProductDetails";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductLoop"
        component={ScreenProductLoop}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductDetails" component={ScreenProductDetails} />
    </Stack.Navigator>
  );
};
