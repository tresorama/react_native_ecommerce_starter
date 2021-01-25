import React from "react";

// NAVIGATOR
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//  >SUB NAVIGATOR ...
import NavigatorProduct from "./NavigatorProduct";
import NavigatorCart from "./NavigatorCart";
import NavigatorAccount from "./NavigatorAccount";
//  >SCREENS ...
import ScreenHome from "../screens/ScreenHome";
import ScreenWishlist from "../screens/ScreenWishlist";
// COMPONENTS...
import TabBarIcon from "./components/TabBarIcon";
// THEME ...
import NavigatorsDefault from "./theme/NavigatorsDefault";

const Tab = createBottomTabNavigator();

const tabBarIcon = ({ route }) => {
  return ({ focused, color, size }) => (
    <TabBarIcon {...{ route, focused, size, color }} />
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={NavigatorsDefault.tab.tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: tabBarIcon({ route }),
      })}
    >
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Products" component={NavigatorProduct} />
      <Tab.Screen name="Cart" component={NavigatorCart} />
      <Tab.Screen name="Wishlist" component={ScreenWishlist} />
      <Tab.Screen name="Account" component={NavigatorAccount} />
    </Tab.Navigator>
  );
};

export default AppStack;
