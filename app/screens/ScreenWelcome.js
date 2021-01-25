import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

// SCREEN ...
import ScreenBlank from "./ScreenBlank";
// COMPONENTS ...
import AppButton from "../components/AppButton";
import Logo from "../components/Logo";
// THEME ...
import colors from "../theme/colors";

function ScreenWelcome({ navigation }) {
  return (
    <ScreenBlank>
      <View style={styles.background}>
        <SafeAreaView style={styles.inner}>
          <Logo style={styles.logo} />
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          />
          <AppButton
            title="Register"
            onPress={() => navigation.navigate("Register")}
            style={styles.button}
          />
          <AppButton
            title="Esplora il Catalogo"
            onPress={() => navigation.navigate("App", { screen: "Home" })}
            style={styles.button}
          />
        </SafeAreaView>
      </View>
    </ScreenBlank>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: colors.white,
    padding: 10,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: "33%",
    width: 250,
    height: 250,
  },
  button: {
    width: "100%",
    marginBottom: 10,
  },
});

export default ScreenWelcome;
