import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "../theme/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  const [text, setText] = useState("");

  return (
    <View style={_s.wrapper}>
      {icon && icon}
      <TextInput
        {...otherProps}
        style={_s.textInput}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const _s = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    padding: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  textInput: {
    color: colors.black,
  },
});

export default AppTextInput;
