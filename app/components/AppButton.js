import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../theme/colors";

const inArray = (a, array) => array.find((test) => test === a);

const AppButton = ({ title, onPress, style = {}, mode = "light" }) => {
  const styles = _styles.getStyle(mode);
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
      <View style={styles.inner}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const _styles = {
  getStyle(mode) {
    const allowed = inArray(mode, ["light", "dark"]);
    return allowed ? this.build(mode) : this.build([this.default]);
  },
  build(mode) {
    return StyleSheet.create({
      wrapper: { ...this.both.wrapper, ...this[mode].wrapper },
      inner: { ...this.both.inner, ...this[mode].inner },
      text: { ...this.both.text, ...this[mode].text },
    });
  },
  default: "light",
  both: {
    wrapper: {},
    inner: {
      padding: 20,
      borderRadius: 5,
      borderWidth: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {},
  },
  light: {
    wrapper: {},
    inner: {
      backgroundColor: colors.white,
      borderColor: colors.black,
    },
    text: {
      color: colors.black,
    },
  },
  dark: {
    wrapper: {
      borderWidth: 3,
      borderColor: colors.black,
    },
    inner: {
      backgroundColor: colors.black,
      borderColor: colors.white,
    },
    text: {
      color: colors.white,
    },
  },
};
export default AppButton;
