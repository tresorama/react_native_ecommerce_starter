import React from "react";
import { Text, View, StyleSheet } from "react-native";

// SCREENS ...
import ScreenBlankSafe from "./ScreenBlankSafe";
// COMPONENTS ...
import AppButton from "../components/AppButton";
// THEME ...
import colors from "../theme/colors";

const ScreenPleaseRegister = ({ navigation }) => {
  const redirectToLogin = () => navigation.navigate("Login");
  const redirectToRegister = () => navigation.navigate("Register");
  return (
    <ScreenBlankSafe>
      <View style={_s.wrapper}>
        <View>
          <Text style={_s.title}>Accedi per gestire un account..</Text>
          <AppButton title="Login" onPress={redirectToLogin} />
        </View>
        <View>
          <Text style={_s.title}>Oppure creane uno nuovo!</Text>
          <AppButton title="Register" onPress={redirectToRegister} />
        </View>
      </View>
    </ScreenBlankSafe>
  );
};

const _s = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 20,
    padding: 70,
    justifyContent: "space-between",
    backgroundColor: colors.lightgrey,
  },
  title: {
    alignSelf: "center",
    padding: 7,
    fontSize: 20,
    marginBottom: 16,
    fontFamily: "Avenir",
  },
});
export default ScreenPleaseRegister;
