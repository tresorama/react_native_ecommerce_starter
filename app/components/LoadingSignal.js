import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const LoadingSignal = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator animating={true} size={"large"} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    top: 100,
  },
});

export default LoadingSignal;
