import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const getIconName = ({ routeName, focused }) => {
  switch (routeName) {
    case "Home":
      if (!focused) return "home-outline";
      if (focused) return "home";
    case "Products":
      if (!focused) return "grid-outline";
      if (focused) return "grid";
    case "Account":
      if (!focused) return "person-outline";
      if (focused) return "person";
    case "Cart":
      if (!focused) return "cart-outline";
      if (focused) return "cart";
    case "Wishlist":
      if (!focused) return "heart-outline";
      if (focused) return "heart";
    default:
      return "";
  }
};

const TabBarIcon = ({ route, focused, size, color }) => {
  const iconName = getIconName({ routeName: route.name, focused });
  return <Ionicons name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
