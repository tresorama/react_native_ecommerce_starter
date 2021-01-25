import React from "react";
import { Button, Text, View } from "react-native";

const ErrorRetry = ({ message, onRetry }) => {
  return (
    <View>
      <Text>{message}</Text>
      <Button title={"Retry"} onPress={onRetry} />
    </View>
  );
};

export default ErrorRetry;
