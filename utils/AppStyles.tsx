import { StyleSheet } from "react-native";
import Colors from "./Colors";
import ScaleSize from "./Scaling";

const AppStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.WHITE100,
    justifyContent: "center",
  },
  heading: {
    marginBottom: ScaleSize(20),
    color: Colors.BLACK100,
    fontSize: ScaleSize(36),
    fontWeight: "semibold",
  },
});

export default AppStyles;
