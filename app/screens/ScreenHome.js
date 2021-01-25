import React from "react";
import { Text } from "react-native";

// SCREENS ...
import ScreenBlankSafe from "./ScreenBlankSafe";

const ScreenHome = ({ navigation }) => {
  return (
    <ScreenBlankSafe>
      <Text>HOME PAGE</Text>
    </ScreenBlankSafe>
  );
};

export default ScreenHome;
