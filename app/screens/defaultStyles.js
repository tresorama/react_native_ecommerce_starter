// THEME ...
import colors from "../theme/colors";

export default {
  wrapper: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    // backgroundColor: colors.orange, // when debug style -> override.
  },
  inner: {
    flex: 1,
    padding: 20,
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
};
// this styles will be used to create a StyleSheet object inside "ScreenBlank" components ...
