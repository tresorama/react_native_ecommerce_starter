import React from "react";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

// pure js object , maybe shared with other screen blank ..
import defaultStyles from "./defaultStyles";

const ScreenBlankSafe = ({ children }) => {
  return (
    <SafeAreaView style={_s.wrapper}>
      <View style={_s.inner}>{children}</View>
    </SafeAreaView>
  );
};

const _s = StyleSheet.create({
  wrapper: {
    ...defaultStyles.wrapper,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inner: {
    ...defaultStyles.inner,
  },
});

export default ScreenBlankSafe;
