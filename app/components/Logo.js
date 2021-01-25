import React from "react";
import { StyleSheet, View, Image } from "react-native";

function Logo({ style = {} }) {
  return (
    <View style={[styles.wrapper, style]}>
      <Image
        style={styles.image}
        source={require("../assets/pipocas_logo.png")}
        resizeMode={"contain"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Logo;
