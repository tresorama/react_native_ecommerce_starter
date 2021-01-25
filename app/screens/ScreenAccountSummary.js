import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

// GLOBAL STATE ...
import AuthContext from "../AppContext/AuthContext";
// SCREENS ...
import ScreenBlank from "./ScreenBlank";
import ScreenPleaseRegister from "./ScreenPleaseRegister";
// COMPONENTS ...
import AppButton from "../components/AppButton";
import ListVertical from "../components/ListVertical";

// LIST ITEMS ...
const exampleItems = [
  {
    id: "id-a",
    title: "Ordini",
    description: "D-a",
    image: require("../assets/placeholder.png"),
    targetScreen: "AccountOrders",
  },
  {
    id: "id-b",
    title: "Indirizzi",
    description: "D-b",
    image: require("../assets/placeholder.png"),
    targetScreen: "AccountAdresses",
  },
];

const ScreenAccountSummary = ({ navigation, route }) => {
  // user object and methods , retrieved from AuthContext ...
  const { user, logout } = useContext(AuthContext);

  // listeners when user logout.
  const handleLogout = async () => {
    await logout();
  };

  // when the user is not logged redirect to "Please Register" Screen ...
  if (!user) return <ScreenPleaseRegister navigation={navigation} route={route} />;

  // when the used is logged render the Account Dashboard ...
  return (
    <ScreenBlank>
      <View style={styles.wrapper}>
        <Text>ACCOUNT SUMMARY</Text>
        <Text>UTENTE : {user ? user.name : "not-logged"}</Text>
        {user && <AppButton title="LOGOUT" onPress={handleLogout} />}
        <ListVertical
          items={exampleItems}
          onItemPress={(item) => console.log(item.targetScreen)}
        />
      </View>
    </ScreenBlank>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
  },
});

export default ScreenAccountSummary;
