import React from "react";
import { View, StyleSheet } from "react-native";

// pure js object , maybe shared with other screen blank ..
import defaultStyles from "./defaultStyles";

const ScreenBlank = ({ children }) => {
  return (
    <View style={_s.wrapper}>
      <View style={_s.inner}>{children}</View>
    </View>
  );
};

const _s = StyleSheet.create({
  wrapper: {
    ...defaultStyles.wrapper,
  },
  inner: {
    ...defaultStyles.inner,
  },
});

export default ScreenBlank;
