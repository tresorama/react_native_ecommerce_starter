import React from "react";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";

import ScreenBlankSafe from "./ScreenBlankSafe";

const ScreenSplash = () => {
  return (
    <ScreenBlankSafe>
      <Text>SplashScreen</Text>
    </ScreenBlankSafe>
  );
};

const ScreenSplashWithExpo = (props) => {
  return <AppLoading {...props} />;
};

export default ScreenSplashWithExpo;
